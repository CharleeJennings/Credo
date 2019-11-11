import React from 'react';
import {Notifications,} from 'expo';
import {StyleSheet, Text, View} from 'react-native';
import * as Permissions from 'expo-permissions';
import DateTimePicker from "react-native-modal-datetime-picker";
import {ListItem} from "react-native-elements";
import moment from "moment";

export default class NotificationSettings extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            enableNotifications: false,
            notificationTime: moment({hour: 10}),
            isTimePickerVisible: false
        };
        this.requestPermission();
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.cardTitleView}>
                    <Text style={styles.cardTitle}>Daily Notifications</Text>
                </View>
                <ListItem
                    title="Enable"
                    leftIcon={{name: 'notifications'}}
                    titleStyle={styles.titleStyle}
                    switch={{
                        onValueChange: v => v ? this.enableNotifications() : this.disableNotifications(),
                        value: this.state.enableNotifications
                    }}
                />
                {this.state.enableNotifications ? this.timePicker() : null}
            </View>
        )
    }

    timePicker() {
        return <>
            <ListItem
                title="Time"
                leftIcon={{name: 'access-time'}}
                titleStyle={styles.titleStyle}
                onPress={this.showTimePicker}
                rightElement={<Text style={{opacity: 0.7}}>{moment(this.state.notificationTime).format('LT')}</Text>}
            />
            <DateTimePicker
                isVisible={this.state.isTimePickerVisible}
                onConfirm={this.handleTimeSelected}
                onCancel={this.hideTimePicker}
                mode="time"
                is24Hour={false}
                date={new Date(this.state.notificationTime)}
                titleIOS="Pick your daily notification time"
            />
        </>;
    }

    requestPermission = async () => {
        const {status: existingStatus} = await Permissions.getAsync(
            Permissions.NOTIFICATIONS
        );

        let finalStatus = existingStatus;
        if (existingStatus !== "granted") {
            const {status} = await Permissions.askAsync(Permissions.NOTIFICATIONS);
            finalStatus = status;
        }

        if (finalStatus === "granted") {
            this.enableNotifications();
        }
    };

    enableNotifications = async () => {
        this.setState({enableNotifications: true});
        let date = new Date(this.state.notificationTime.valueOf());
        if (date < new Date()) {
            date.setDate(date.getDate() + 1);
        }
        let notificationId = Notifications.scheduleLocalNotificationAsync(
            {
                title: "Quote of the Day",
                body: "Read today's quote in Credo!"
            },
            {
                repeat: "day",
                time: date.getTime()
            }
        );
    };

    disableNotifications() {
        this.setState({enableNotifications: false});
        Notifications.cancelAllScheduledNotificationsAsync();
    }

    showTimePicker = () => {
        this.setState({isTimePickerVisible: true});
    };

    hideTimePicker = () => {
        this.setState({isTimePickerVisible: false});
    };

    handleTimeSelected = date => {
        this.setState({
            isTimePickerVisible: false,
            notificationTime: moment(date)
        });
        Notifications.cancelAllScheduledNotificationsAsync()
            .then(v => {
                this.enableNotifications();
            })
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EAE9E9"
    },
    cardTitleView: {
        paddingHorizontal: 15,
        paddingTop: 20,
        paddingBottom: 8
    },
    cardTitle: {
        fontSize: 20,
        color: "#420001",
        fontWeight: "600"
    },
    titleStyle: {
        fontSize: 16,
        color: "#420001"
    }
});