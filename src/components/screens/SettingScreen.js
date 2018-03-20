import React, { Component } from 'react';
import {   View , StyleSheet, Text} from 'react-native';

import CheckBox from 'react-native-check-box'

export default class SettingScreen extends Component {


    constructor(props) {
        super(props);

    }
    componentWillMount(){
        this.setState({
           currency:this.props.screenProps.currency
        })
    }
    componentDidMount() {
    }

    _onPress(value){
         console.log("checkbox value is: ", value);
        this.setState({
            currency:value
        })
        this.props.screenProps.setCurrency(value);
    }
    render() {

        return (


            <View style={styles.container}>
                <Text>setting page</Text>
                <Text>Currency: EURO </Text>
                <CheckBox
                    style={{flex: 1, padding: 10}}
                    onClick={()=>this._onPress('EUR')}
                    isChecked={this.state.currency == 'EUR' ? true : false}
                    leftText={'EURO'}
                />
                <Text>Currency: DOLLARO </Text>
                <CheckBox
                    style={{flex: 1, padding: 10}}
                    onClick={()=>this._onPress('USD')}
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
