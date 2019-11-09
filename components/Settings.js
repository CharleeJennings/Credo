import React from 'react';
import {Notifications,} from 'expo';
import {StyleSheet, Switch, Text, View} from 'react-native';
import * as Permissions from 'expo-permissions';
import flamebase from "../firebase";

export default class Settings extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            settingsSwitch: false,
            title: "Settings page!"
        }
    }

    componentDidMount() {
        registerForPushNotificationsAsync();

        // Handle notifications that are received or selected while the app
        // is open. If the app was closed and then opened by tapping the
        // notification (rather than just tapping the app icon to open it),
        // this function will fire on the next tick after the app starts
        // with the notification data.
        this._notificationSubscription = Notifications.addListener(this._handleNotification);
    }

    _handleNotification = (notification) => {
        this.setState({notification: notification});
    };

    render() {
        return (
            <View style={style.container}>
                <Text>
                    {this.state.title}
                </Text>
                <Switch onValueChange={(value) => this.setState({settingsSwitch: value})}
                        value={this.state.settingsSwitch}/>
            </View>
        )
    }
}

async function registerForPushNotificationsAsync() {
    const {status: existingStatus} = await Permissions.getAsync(
        Permissions.NOTIFICATIONS
    );
    let finalStatus = existingStatus;

    // only ask if permissions have not already been determined, because
    // iOS won't necessarily prompt the user a second time.
    if (existingStatus !== 'granted') {
        // Android remote notification permissions are granted during the app
        // install, so this will only ask on iOS
        const {status} = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        finalStatus = status;
    }

    // Stop here if the user did not grant permissions
    if (finalStatus !== 'granted') {
        return;
    }

    // Get the token that uniquely identifies this device
    let token = await Notifications.getExpoPushTokenAsync();

    flamebase.firestore()
        .collection('devices')
        .add({token: token})
        .then(r => console.log('Saved device token.'));
}

const style = StyleSheet.create({
    container:
        {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: "#F6F6F6"
        }
});