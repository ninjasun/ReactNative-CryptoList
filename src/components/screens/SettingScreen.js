import React, { Component } from 'react';
import {   View , StyleSheet, Text} from 'react-native';


export default class SettingScreen extends Component {


    constructor(props) {
        super(props);

    }
    componentWillMount(){

    }
    componentDidMount() {
    }

    render() {

        return (


            <View style={styles.container}>
                <Text>setting page</Text>

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
