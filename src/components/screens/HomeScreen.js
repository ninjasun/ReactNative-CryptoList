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
        let currencyString = this.state.currency == '$' ? "USD" : 'EUR';
        let url = "https://api.coinmarketcap.com/v1/ticker/?convert="+currencyString+"&limit=10";

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
        //console.log("props in HomeScreen has value: ", this.props.screenProps.currency);

        let currencyString = currency == '$' ? "USD" : 'EUR';
        let url = "https://api.coinmarketcap.com/v1/ticker/?convert="+currencyString;

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

    _renderItem  = ({item}) => {
        const {navigate }= this.props.navigation;

        const { currency} = this.state;
    //
        //   console.log("Currency is: ". currency)
        return (
        <CoinContainer
           item={item}
           currency={currency}
            id={item.id}
            navigate={navigate}
        />)
};

    render() {
         return (
             <View>
                     <FlatList
                      data={this.state.dataSource}
                      keyExtractor={this._keyExtractor}
                      renderItem={this._renderItem}
                />
             </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5c5c5c',
        width:400

    }
});
