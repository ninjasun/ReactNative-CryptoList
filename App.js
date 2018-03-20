import React from 'react';

import { StackNavigator, TabBarBottom, TabNavigator } from 'react-navigation';

import Ionicons from 'react-native-vector-icons/Ionicons';

import DetailsScreen from './src/components/screens/DetailsScreen';

import SettingScreen from './src/components/screens/SettingScreen';

import HomeScreen from './src/components/screens/HomeScreen';


const HomeStack = StackNavigator({
    Home: { screen: HomeScreen },
    Details: {screen: DetailsScreen }
});

const SettingStack = StackNavigator({
    Setting : {screen: SettingScreen}
});

const Routing =  TabNavigator(
    {
        Home: { screen: HomeStack },
        Setting: { screen: SettingStack },
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                    iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                } else if (routeName === 'Setting') {
                    iconName = `ios-options${focused ? '' : '-outline'}`;
                }

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Ionicons name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        animationEnabled: true,
        swipeEnabled: true,
    }
);


import { COLOR, ThemeProvider } from 'react-native-material-ui';

// you can set your style right here, it'll be propagated to application
const uiTheme = {
    palette: {
        primaryColor: COLOR.green500,
    },
    toolbar: {
        container: {
            height: 50,
        },
    },
};

export default class App extends React.Component {
//adding data store
    constructor(props) {
        super(props);
        this.state = {
            currency:'EUR'
        };

    }
    setCurrency(currency){
       // let currency = currency | 'USD' //default
        this.setState({
            currency : currency
        })
    }

    render(){
        return (
        <ThemeProvider uiTheme={uiTheme}>

                <Routing screenProps={{currency: this.state.currency, setCurrency : this.setCurrency.bind(this)}}/>

        </ThemeProvider>
        )

    }
}
