import React from 'react';

//TabBarTop default android
//TabBarBottom default iOs

import { StackNavigator, TabBarTop, TabNavigator } from 'react-navigation';

//import Ionicons from 'react-native-vector-icons/Ionicons';

import DetailsScreen from './src/components/screens/DetailsScreen';

import SettingScreen from './src/components/screens/SettingScreen';

import HomeScreen from './src/components/screens/HomeScreen';

import { MaterialIcons } from './src/assets/MaterialIcons.ttf';

import { Ionicons } from './src/assets/Ionicons.ttf';

import {Platform, Dimensions, View, StyleSheet, Text} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

const HomeStack = StackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Crypto List',
            headerRight: <Icon name="more-vert" size={24} color="#FFF" />,
            headerStyle:{
                backgroundColor:'#4caf50',
            },
            headerTintColor:'#FFF',
            headerBackTitleStyle:'#FFF'
        }),

    },
    Details: {
        screen: DetailsScreen,
        navigationOptions: ({ navigation }) => ({
            title: `${navigation.state.params.name}`,
            headerRight: <Icon name="more-vert" size={24} color="#FFF" />,
            headerStyle:{
                backgroundColor:'#4caf50',
            },
            headerTintColor:'#FFF',
            headerBackTitleStyle:'#FFF'
        }),

    }
});

const SettingStack = StackNavigator({
    Setting : {
        screen: SettingScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Settings',
            headerRight: <Icon name="more-vert" size={24} color="#FFF" />,
            headerStyle:{
                backgroundColor:'#4caf50'
            },
            headerTintColor:'#FFF'
        }),

    }
});


const RouteConfigs =
    {
        Home: {
            screen: HomeStack,
            navigationOptions: {
                tabBarLabel: 'HOME',

            },
        },
        Setting: {
            screen: SettingStack,
            navigationOptions: {
                tabBarLabel: 'SETTING',

            },
        }
    };
const TabNavigatorConfig =
    {
    tabBarOptions:{

        inactiveTintColor:'#DDD',

        style:{
            backgroundColor:'#4caf50',
        },
        indicatorStyle:{
            backgroundColor:'#FFF',
            borderColor:'#FFF'
        },
        labelStyle: {
            fontSize: 12,
        },
    }   ,
    tabBarPosition: 'bottom',  // So your Android tabs go bottom
        tabBarComponent: TabBarTop ,
        animationEnabled: true,
        swipeEnabled: true,

    };

const Tabs =  TabNavigator( RouteConfigs, TabNavigatorConfig);

import { COLOR, ThemeProvider } from 'react-native-material-ui';

// you can set your style right here, it'll be propagated to application
const uiTheme = {
    palette: {
        primaryColor: COLOR.green500,
    },

};

export default class App extends React.Component {
//adding data store
    constructor(props) {
        super(props);
        this.state = {
            currency:'€'
        };

    }
    setCurrency(currency){
        this.setState({
            currency : currency
        })
    }

    render(){
        let width = Dimensions.get('window').width;
        styles.container.width = width;


        return (
        <ThemeProvider uiTheme={uiTheme}>
                <View style={styles.container}>
                 <Tabs screenProps={{currency: this.state.currency, setCurrency : this.setCurrency.bind(this)}}/>
                </View>
        </ThemeProvider>
        )

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#616161',

    }
});
