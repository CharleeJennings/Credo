import React, {Component} from 'react';
import flamebase from '../firebase';
import { YellowBox, StyleSheet, View, Text, FlatList } from 'react-native';
import HTMLView from 'react-native-htmlview';

export default class QuoteList extends Component {
    componentWillMount = () =>{
        const firestore = flamebase.firestore();
        const quotesRef = firestore.collection('quotes');
        const quoteData = [];
        quotesRef.get().then(querySnapshot => {
            querySnapshot.forEach(doc => { 
                const {add_date, author, category, modify_date, title, quote} = doc.data();
                this.state.sample = quote
                quoteData.push({
                    quoteKey: doc.id,
                    quoteTitle: title,
                    quoteText: quote,
                    quoteAuthor: author
                });
            });
            quoteData.sort((a, b) => (a.add_date < b.add_date) ? 1 : -1)
            this.setState({
                quotes: quoteData,
            }) 
        });
        // this.forceUpdate()
    }
    
    constructor(props) {
        super(props);
        this.state = {
            quotes: [],
        };
        YellowBox.ignoreWarnings(['Setting a timer']);
    }
    
    render () {
        return (
            <FlatList
                data={this.state.quotes}
                renderItem={({ item }) => 
                <View>
                    <Text style={style.item}>{item.quoteTitle}</Text>
                    <HTMLView
                        value={item.quoteText}
                        stylesheet={style}
                    />
                    <Text style={style.authorItem}>- {item.quoteAuthor}</Text>
                </View>}
                keyExtractor={item => item.quoteKey}
            />
        )
    }
}

const style = StyleSheet.create({
    container:{
        flex: 0.5,
        paddingTop: 22,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: "#F6F6F6"
    },
    item: {
        textAlign:'center',
        padding: 2,
        paddingLeft: 30,
        paddingRight: 30,
        fontSize: 14,
        // minHeight: 110,
        height: 'auto'
    },
    authorItem: {
        textAlign:'center',
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        marginBottom: 20,
        fontSize: 14,
        // minHeight: 110,
        height: 'auto'
    },
    p: {
        padding: 0,
        margin: 0
    }
})