import {createAppContainer} from 'react-navigation'; // Container for application
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import React from 'react'
import Quote from './Quote'
import NotificationSettings from './NotificationSettings'
import {Icon} from 'react-native-elements'
import Connect from "./Connect";
import About from "./About"; /// Icon set check API for more information

///////////////////
/////// This is a functions to return the icon when focused on the tab and in general the icons 

const getTabBarIcon = (navigation, focused, tintColor) => {
    const {routeName} = navigation.state;
    let iconName;
    if (routeName === 'Home') {
        iconName = `chat-bubble${focused ? '' : '-outline'}`;
        // We want to add badges to home tab icon
    } else if (routeName === 'Settings') {
        iconName = `notifications${focused ? '' : '-none'}`;
    } else if (routeName === 'Connect') {
        iconName = `people${focused ? '' : '-outline'}`;
    } else if (routeName === 'About') {
        iconName = `info${focused ? '' : '-outline'}`;
    }

    // You can return any component that you like here!
    return <Icon name={iconName} size={25} type='material' color={tintColor}/>;
};

const TabNavigator = createBottomTabNavigator({
        Home: Quote,
        Settings: NotificationSettings,
        Connect: Connect,
        About: About
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, tintColor}) =>
                getTabBarIcon(navigation, focused, tintColor),
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    });


const StackNavigator = createStackNavigator({
    AppAnchor: {
        screen: TabNavigator,
        navigationOptions: {title: 'Credo'},
    }
}, {
    headerLayoutPreset: 'center'
});

export default createAppContainer(StackNavigator);