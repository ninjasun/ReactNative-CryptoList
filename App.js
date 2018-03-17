import React, { Component } from 'react';
import { StyleSheet,  View ,  FlatList, Button , TouchableOpacity} from 'react-native';
import { StackNavigator } from 'react-navigation';

//import CoinContainer from './src/components/CoinContainer';

import DetailsScreen from './src/components/screens/DetailsScreen';

//import SettingScreen from './src/components/screens/SettingScreen';


class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = { dataSource: []};

    }
    componentWillMount(){

    }
  /*  componentDidMount(){
        return fetch('https://api.coinmarketcap.com/v1/ticker/' )

            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({

                    dataSource: responseJson,
                }, function(){

                });
            })
            .catch((error) => {
                console.error(error);
            });
    }*/

    render() {

        const _self = this;
        return (


            <View style={styles.container}>

                <View>
                    <Button style={styles.button}
                                      title="Go to Details"
                                      onPress={() => {
                                          this.props.navigation.navigate('Details', { name: 'Details' });
                                      }}
                        >
                    </Button>
                </View>

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
    header: {
        height:50,
        flex:1,
        backgroundColor: 'black',
        justifyContent: 'center'
    },
    button:{
      width:200,
      height:100,
      padding:10,
      backgroundColor:'#DDD'
    },
    footer:{
        height:40,
        flex:1,
        backgroundColor: 'black',
        justifyContent: 'center'

    }

});


const RootStack = StackNavigator({
    Home:{
        screen: HomeScreen,
    },
    Details: {
        screen: DetailsScreen,
    },

    initialRouteName: 'Home'
});

export default class App extends React.Component {
    render(){
        return <RootStack />;
    }
}
