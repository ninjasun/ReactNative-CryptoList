import React, { Component } from 'react';
import { StyleSheet,  View, Text, TouchableOpacity} from 'react-native';



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
        const { navigate } = this.props.navigate;
        const _self = this;

        const { name, symbol, price, currency, rank } = this.state;
        return (
            <View style={styles.iconContainer}>
                <TouchableOpacity
                    onPress={() => _self.props.navigate('Details',{
                        name : name,
                        symbol:symbol,
                        price: price,
                        currency:currency

                    })}
                    style={styles.button}
                >
                    <Text>{name}</Text>
                    <Text>{symbol}</Text>

                    <Text>{price}</Text>
                    <Text>{currency}</Text>

                </TouchableOpacity>
            </View>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'flex-start'

    },
    button:{
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    },
    iconContainer:{
        padding:10,
        width:'100%',
        backgroundColor:'powderblue',
        flex: 1,
        flexDirection: 'row'


    }
});
