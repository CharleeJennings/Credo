import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native';
import QuoteList from './QuoteList';

export default function Quote() {
    return (
      <View style={style.container}>
        <QuoteList/>
      </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: 22,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: "#F6F6F6"
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 144
    }
})