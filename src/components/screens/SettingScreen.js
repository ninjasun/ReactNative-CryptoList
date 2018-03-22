import React, { Component } from 'react';
import {   View , StyleSheet, Text} from 'react-native';


import { RadioButton } from 'react-native-material-ui';

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


    _onChecked(value){
        //console.log("value")
        this.setState({
            currency:value
        })
        this.props.screenProps.setCurrency(value);
        return
    }
    _onSelect(value){
        console.log("_onSelect this is: ", value)
        return
    }
    render() {

        return (

            <View style={styles.container}>
                <Text>Set a currency</Text>
                <View style={{width: '50%', height: 100}}>

                    <Text>Euro</Text>
                    <RadioButton
                        label=""
                        value="EUR"
                        checked={this.state.currency == '€' ? true : false}
                        onSelect={this._onSelect}
                        onCheck={this._onChecked.bind(this,'€')}

                    />
                </View>
                <View style={{width: '50%', height: 100}}>
                    <Text>Dollar</Text>
                    <RadioButton
                        checked={this.state.currency == '$' ? true : false}
                        label=""
                        value="USD"
                        onCheck={this._onChecked.bind(this, '$')}
                        onSelect={this._onSelect}

                    />
                </View>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    row:{

    },
    col:{

    },
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#5c5c5c',

    }
});



