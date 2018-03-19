import React, { Component } from 'react';
import { StyleSheet,  View ,  FlatList, ActivityIndicator } from 'react-native';


import CoinContainer from '../CoinContainer';

export default class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = { dataSource: [], isLoading : false};

    }
    componentWillMount(){

    }
    componentDidMount(){

        this.setState({
            isLoading : true
        });

        return fetch('https://api.coinmarketcap.com/v1/ticker/' )

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

        const {isLoading} = this.state;
        return (

            {isLoading} ? <View style={styles.container}>

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
