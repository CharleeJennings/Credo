import React from 'react'
import { StyleSheet, Text, View } from 'react-native';


export default function Connect(){
    return(
        <View style ={style.container}>
            <Text>
                Blah blah we are awesome.
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

