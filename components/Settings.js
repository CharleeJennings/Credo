import React from 'react'
import { StyleSheet, Text, View, Switch } from 'react-native';



export default class Settings extends React.Component {
    constructor() {
        super();
        this.state = {
           settingsSwitch: false,
           title: "Settings page!"
        }
    }
    render() {
        return (
        <View style={style.container}>
            <Text>
                {this.state.title}
            </Text>
            <Switch onValueChange={(value) => this.setState({settingsSwitch: value})} value={this.state.settingsSwitch} />
        </View>
        )
    }
}



const style = StyleSheet.create({

    container:
    {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#F6F6F6"
    }
})