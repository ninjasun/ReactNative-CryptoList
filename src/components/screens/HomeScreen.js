import React, { Component } from 'react';
import { StyleSheet,  View ,  FlatList, ActivityIndicator } from 'react-native';


import CoinContainer from '../CoinContainer';

export default class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            isLoading : false,
            currency:this.props.screenProps.currency
        };

    }
    componentWillMount(){

    }
    componentDidMount(){

        this.setState({
            isLoading : true
        });
        let currency = this.props.screenProps.currency;
        console.log("props in HomeScreen has value: ", this.props.screenProps.currency);
        let url = "https://api.coinmarketcap.com/v1/ticker/?convert="+currency+"&limit=10";

        return fetch(url )

            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({

                    dataSource: responseJson,
                    isLoading:false
                }, function(){

                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        const {navigate }= this.props.navigation;

        const {isLoading, currency} = this.state;
        return (

            {isLoading} ? <View style={styles.container}>

                <FlatList
                    data={this.state.dataSource}
                    renderItem={( {item}) =>
                        <CoinContainer
                            name={item.name}
                            symbol={item.symbol}
                            currency={currency}
                            price={currency == 'USD' ? item.price_usd : item.price_eur}
                            id={item.id}
                            navigate={navigate}
                        >

                        </CoinContainer>
                    }

                />

            </View> : <ActivityIndicator size="large" color="#0000ff"  />
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
