import React, { Component } from 'react';
import { StyleSheet,  View ,  FlatList } from 'react-native';


import CoinContainer from '../CoinContainer';

export default class HomeScreen extends Component {

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
