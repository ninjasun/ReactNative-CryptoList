import React, { Component } from 'react';
import { StyleSheet,  View ,  FlatList, Button, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

import CoinContainer from './src/components/CoinContainer';
import DetailsScreen from './src/components/screens/DetailsScreen';

import SettingScreen from './src/components/screens/SettingScreen';


class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = { dataSource: []};

    }
    componentWillMount(){

    }
    componentDidMount(){
        return fetch('https://api.coinmarketcap.com/v1/ticker/' )

            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({

                    dataSource: responseJson,
                }, function(){

                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        const {navigate }= this.props.navigation;
        console.log("navigate is: ", navigate);
        return (

            <View style={styles.container}>

                <FlatList
                    data={this.state.dataSource}
                    renderItem={({item}) =>
                        <CoinContainer
                            name={item.name}
                            symbol={item.symbol}
                            price_usd={item.price_usd}
                            id={item.id}
                            navigate={navigate}
                        >

                        </CoinContainer>
                    }

                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },


});


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
