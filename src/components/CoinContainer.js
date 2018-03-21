import React, { Component } from 'react';
import { StyleSheet,  View, Text, TouchableOpacity} from 'react-native';

import { Card } from 'react-native-material-ui';

export default class CoinContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
           item:this.props.item,
            id:this.props.id,
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

        const { name,
            symbol,
            price,
            currency,
            rank,
            id,
            percent_change_1h,
            percent_change_24h,
            percent_change_7d,
            last_updated,
        } = this.state.item;
        return (
                <View>
                <TouchableOpacity
                    onPress={() => _self.props.navigate('Details',{
                        name : name,
                        symbol:symbol,
                        price: price,
                        rank : rank,
                        currency:currency
                    })}
                    style={styles.card}
                >
                    <Text style={styles.font}>{name} ({symbol})</Text>
                    <Text style={styles.font}>{currency} {price}</Text>
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
