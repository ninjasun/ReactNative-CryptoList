import React, { Component } from 'react';
import { StyleSheet,  View, Text, Button} from 'react-native';


export default class DetailsScreen extends React.Component {


    constructor(props) {
        super(props);

    }

 /*   componentDidMount(){
        let url = 'https://api.coinmarketcap.com/v1/ticker/';
        const { params } = this.props.navigation.state;

        const id = params ? params.id : null;
        const name = params ? params.name : 'name';
        const usc_price = params ? params.usd_price : '0';

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


    }*/
    render() {


        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>


                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        );
    }
}
