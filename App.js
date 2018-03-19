import React from 'react';

import { StackNavigator } from 'react-navigation';

import DetailsScreen from './src/components/screens/DetailsScreen';

import SettingScreen from './src/components/screens/SettingScreen';

import HomeScreen from './src/components/screens/HomeScreen';


const RootStack = StackNavigator({
    Home:{
        screen: HomeScreen,
    },
    Details: {
        screen: DetailsScreen,
    },
    Settings: {
        screen: SettingScreen,
    },
    initialRouteName: 'Home'
});

export default class App extends React.Component {
    render(){
        return <RootStack />;
    }
}
