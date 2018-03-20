import React, { Component } from 'react';
import { StyleSheet,  View, Text} from 'react-native';


export default class DetailsScreen extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            detailsData:{},
            name:'',
            symbol:'',
            id:'',
            rank:''

        }
    }
    componentWillMount(){

        const { params } = this.props.navigation.state;
        const name = params ? params.name : null;
        const symbol = params ? params.symbol : null;
        const id = params ? params.id : null;
        const rank = params ? params.rank : null;


        this.setState({
            name,
            symbol,
            id,
            rank

        });
    }

    componentDidMount(){
        let url = 'https://api.coinmarketcap.com/v1/ticker/';
        const { params } = this.props.navigation.state;

        const id = params ? params.id : null;

        url = url + id;

        return fetch(url)

            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({

                    detailsData: responseJson,
                }, function(){

                });
            })
            .catch((error) => {
                console.error(error);
            });


    }
    render() {

        const {name, symbol, usd_price} = this.state;
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
                <Text>name is: {name}</Text>
                <Text>symbol is: {symbol} </Text>

            </View>
        );
    }
}
