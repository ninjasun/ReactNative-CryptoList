import React, { Component } from 'react';
import {   View , StyleSheet, Text} from 'react-native';

import CheckBox from 'react-native-check-box'

export default class SettingScreen extends Component {


    constructor(props) {
        super(props);

    }
    componentWillMount(){
        this.setState({
           currency:'USD'
        })
    }
    componentDidMount() {
    }

    render() {

        return (


            <View style={styles.container}>
                <Text>setting page</Text>
                <Text>Currency: EURO </Text>
                <CheckBox
                    style={{flex: 1, padding: 10}}
                    onClick={()=>this.state.currency == 'USD' ? this.setState({currency:'EUR'}) : this.setState({currency:'USD'})}
                    isChecked={this.state.currency == 'EUR' ? true : false}
                    leftText={'EURO'}
                />
                <Text>Currency: DOLLARO </Text>
                <CheckBox
                    style={{flex: 1, padding: 10}}
                    onClick={()=>this.setState({currency:'USD'})}
                    isChecked={this.state.currency == 'USD' ? true : false}
                    leftText={'DOLLARO'}
                />
                <Text>Currency is: {this.state.currency}</Text>
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
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    }
});
