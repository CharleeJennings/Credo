import React, {Component} from 'react'
import { StyleSheet, View, Text, ListView } from 'react-native';

export default class QuoteList extends Component {

    constructor(props) {
        super(props);
        list = [
            "\"Success doesn't necessarily come from breakthrough innovation but from flawless execution. A great strategy alone won't win a game or a battle; the win comes from basic blocking and tackling.\"",
            "\"If in our daily life we can smile, if we can be peaceful and happy, not only we, but everyone will profit from it. This is the most basic kind of peace work.\"",
            "\"Success is neither magical nor mysterious. Success is the natural consequence of consistently applying the basic fundamentals.\"",
            "\"Was off the Remy, had a Papoose Had to hit my old town to duck the news Two four hour lockdown, we made no moves Now it's 4 a.m. and I'm back up poppin' with the crew I just landed in, Chase B mixes pop like Jamba Juice\"",
            "\"I was hot as hell out in the heat (Yeah, yeah) Then a storm came in and saved my life Head up to the sky, down on my knees (Straight up) Out of nowhere, you came here to save the night In the nighttime (Woo, yeah)\""
        ]
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(list),
        };
    }
    
    render () {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(data) => <View><Text style={style.item}>{data}</Text></View>}
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
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        fontSize: 14,
        // minHeight: 110,
        height: 'auto'
    }
})