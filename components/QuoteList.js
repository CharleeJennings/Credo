import React, {Component} from 'react';
import flamebase from '../firebase';
import { Header } from 'react-navigation-stack';
import { YellowBox, StyleSheet, View, Text, FlatList, Dimensions } from 'react-native';
import HTMLView from 'react-native-htmlview';

export default class QuoteList extends Component {
    componentWillMount = () =>{
        const firestore = flamebase.firestore();
        const quotesRef = firestore.collection('quotes');
        const quoteData = [];
        quotesRef.get().then(querySnapshot => {
            querySnapshot.forEach(doc => { 
                const {add_date, author, category, modify_date, title, quote} = doc.data()
                const date = add_date.toDate()
                const printDate = ('0' + (date.getMonth() + 1)).slice(-2) + "/" + ('0' + (date.getDate())).slice(-2) + "/" + date.getFullYear()
                quoteData.push({
                    quoteKey: doc.id,
                    quoteTitle: title,
                    quoteText: quote,
                    quoteAuthor: author,
                    quoteAddDate: printDate
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
            <FlatList contentContainerStyle={style.flexList}
                data={this.state.quotes}
                renderItem={({ item }) => 
                <View style={style.post}>
                    <View></View>
                    <View style={style.quoteContainer}>
                        <Text style={style.title}>{item.quoteTitle}</Text>
                            <HTMLView
                                value={item.quoteText}
                                stylesheet={style}
                            />
                        <Text style={style.authorItem}>- {item.quoteAuthor}</Text>
                    </View>
                    <View style={style.datePanel}><Text style={style.date}>{item.quoteAddDate}</Text></View>
                </View>}
                keyExtractor={item => item.quoteKey}
            />
        )
    }
}

const screenHeight = Math.round(Dimensions.get('window').height) - (Header.HEIGHT * 2)

const style = StyleSheet.create({
    flexList: {
        padding: 0,
        margin: 0,
        backgroundColor: "#7d7d7d"
    },
    post: {
        height: screenHeight,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        backgroundColor: "#000000",
        borderTopColor: '#FFFFFF',
        borderTopWidth: 5,
        borderBottomColor: '#FFFFFF',
        borderBottomWidth: 5,
        marginBottom: 10
    },
    quoteContainer: {
        paddingLeft: 30,
        paddingRight: 30
    },
    title: {
        textAlign:'center',
        padding: 2,
        paddingLeft: 30,
        paddingRight: 30,
        fontSize: 14,
        // minHeight: 110,
        color: "#FFFFFF"
    },
    authorItem: {
        textAlign:'center',
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        marginBottom: 20,
        fontSize: 14,
        // minHeight: 110,
        color: "#FFFFFF"
    },
    datePanel: {
        marginRight: 5,
        marginBottom: 10
    },
    date: {
        alignSelf: 'flex-end',
        color: "#FFFFFF"
    },
    p: {
        textAlign:'center',
        padding: 0,
        margin: 0,
        color: "#FFFFFF"
    }
})