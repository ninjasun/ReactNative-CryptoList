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
    componentWillReceiveProps(nextProps){
        this.setState({
            currency:nextProps.screenProps.currency,
            isLoading:true
        });

        //fetch again
        let url = "https://api.coinmarketcap.com/v1/ticker/?convert="+nextProps.screenProps.currency+"&limit=10";

        return fetch(url )

            .then((response) => response.json())
            .then((responseJson) => {
                //console.log("API return")
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
    _keyExtractor = (item, index) => item.id;

    render() {
        const {navigate }= this.props.navigation;

        const {isLoading, currency} = this.state;
        return (

                <View style={styles.container}>

                     <FlatList
                      data={this.state.dataSource}
                      keyExtractor={this._keyExtractor}
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
    }
});
