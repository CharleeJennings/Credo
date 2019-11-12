import React from 'react'
import { StyleSheet, Platform, Text, View, FlatList } from 'react-native';
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
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: "#F6F6F6"
        // paddingTop: Platform.OS === 'android' ? 45 : 0
    }
})