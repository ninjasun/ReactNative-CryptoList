import React, { Component } from 'react';
import { StyleSheet,  View, Text, TouchableOpacity} from 'react-native';

import { Card } from 'react-native-material-ui';

export default class CoinContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            symbol:this.props.symbol,
            price: this.props.price,
            id:this.props.id,
            rank:this.props.rank,
            currency:this.props.currency
        };


    }
    componentWillMount(){

    }
    componentWillReceiveProps(nextProps){
        //console.log("CoinContainer will receive new props: ", nextProps)
        if (this.state.currency == nextProps.currency){
            return
        }
        else {
            this.setState({
                currency : nextProps.currency
            })
        }
    }

    render() {

        const _self = this;

        const { name, symbol, price, currency, rank } = this.state;
        return (
                <View>
                <TouchableOpacity
                    onPress={() => _self.props.navigate('Details',{
                        name : name,
                        symbol:symbol,
                        price: price,
                        currency:currency

                    })}
                    style={styles.card}>
                    <Text style={styles.font}>{name}</Text>
                    <Text style={styles.font}>{symbol}</Text>

                    <Text style={styles.font}>{price}</Text>
                    <Text style={styles.font}>{currency}</Text>
                </TouchableOpacity>
                </View>
        );
    }
}

const styles =  Object.create({
    font:{
        color:'white'
    },
    card:{
        backgroundColor:'#424242',
        padding: 10,
        margin:10
    }
});
