import React, { Component } from 'react';
import { StyleSheet,  View ,  FlatList, Button } from 'react-native';
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

        return (


            <View style={styles.container}>
                <View style={styles.header}>
                    header
                </View>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({item}) =>
                        <CoinContainer
                            name={item.name}
                            symbol={item.symbol}
                            price_usd={item.price_usd}>
                            <Button
                                title="Go to Details... again"
                                onPress={() => this.props.navigation.navigate('Details',{
                                    name:item.name,
                                    price_usd:item.price_usd,
                                    id:item.id
                                })}
                            />
                        </CoinContainer>
                    }

                />
                <View style={styles.footer}>
                    footer

                </View>
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
    header: {
        height:50,
        flex:1,
        backgroundColor: 'black',
        justifyContent: 'center'
    },
    footer:{
        height:40,
        flex:1,
        backgroundColor: 'black',
        justifyContent: 'center',
        position:'fixed',
    }

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
