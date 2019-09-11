import React from 'react'
import { StyleSheet, Text, View } from 'react-native';



export default function Quote()

{
    return (
        <View style ={style.container}>
            <Text>
                Charles Jennings
            </Text>
        </View>

    )
}



const style = StyleSheet.create({

    container:
    {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: "#F6F6F6"
    }



})