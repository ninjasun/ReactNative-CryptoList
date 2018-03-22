import React, { Component } from 'react';
import { StyleSheet,  View, Text, TouchableOpacity} from 'react-native';


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
       // console.log("CoinContainer will mouth with: ", this.props)
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
    getLastUpdated(time){
       //TO DO AS BACKGROUND CHECK
        return time
    }
    render() {

        const _self = this;

        const { name,
            symbol,
            rank,
            id,
            percent_change_1h,
            percent_change_24h,
            percent_change_7d,
            last_updated,
        } = this.state.item;

        let currency = this.state.currency;

        let price = currency == '€' ?  this.state.item.price_eur : this.state.item.price_usd;

        let priceFloated =  parseFloat(price).toPrecision(6);

        let priceString = currency + priceFloated;

        let percent_change_1h_style = percent_change_1h > 0 ? 'green' : 'red';
        let percent_change_24h_style = percent_change_24h > 0 ? 'green' : 'red';

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
                    <View style={styles.left}>
                        <Text style={styles.fontSize}>{name} ({symbol})</Text>
                        <Text style={styles.price}>{priceString}</Text>

                    </View>
                    <View style={styles.right}>
                        <Text style={{color:percent_change_1h_style }}>1h   {percent_change_1h}</Text>
                        <Text style={{color:percent_change_24h_style}}>24h  {percent_change_24h}</Text>
                        <Text style={styles.font}>last update: {this.getLastUpdated(last_updated)}</Text>
                    </View>

                </TouchableOpacity>
                </View>
        );
    }
}

const styles =  Object.create({
    font:{
        color:'white'
    },
    fontSize:{
      fontSize:16,
        color:'white'
    },
    card:{
        backgroundColor:'#424242',
        padding: 10,
        margin:10,
        display:'flex',

        flexDirection:'row'
    },
    left:{
        width:'50%',
        alignSelf:'flex-start',
        justifyContent:'space-between',

    },
    price:{
      fontSize:20,
      flexDirection:'column',
      color:'#FFF',
      justifyContent:'flex-end',
    },
    right:{
        alignItems:'flex-end',
        width:'50%',

    }
});
