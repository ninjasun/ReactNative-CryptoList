import React, { Component } from 'react';
import { StyleSheet,  View, Text, TouchableOpacity} from 'react-native';



export default class CoinContainer extends Component {

    constructor(props) {
        super(props);
        this.state = { name: this.props.name, symbol:this.props.symbol, price_usd: this.props.price_usd};


    }
    componentWillMount(){

    }
    componentWillReceiveProps(nextProps){
        if (this.state.usd_price == nextProps.usd_price){
            return
        }
        else {
            this.setState({
                usd_price : nextProps.usd_price
            })
        }
    }

    render() {

        return (
            <View style={styles.iconContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text>{this.state.name}</Text>
                    <Text>{this.state.symbol}</Text>

                    <Text>{this.state.price_usd} USD</Text>
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
        flexDirection: 'row',


    }
});