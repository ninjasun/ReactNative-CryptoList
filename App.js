import React, { Component } from 'react';
import { StyleSheet,  View , AppRegistry, ActivityIndicator, FlatList, ScrollView, Image, Text} from 'react-native';



export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {isLoading: true, dataSource: []};

    }
    componentWillMount(){

    }
    componentDidMount(){
        return fetch('https://api.coinmarketcap.com/v1/ticker/' )

            .then((response) => response.json())
            .then((responseJson) => {
                console.log("responsedata is: ", responseJson)
                this.setState({
                    isLoading: false,
                    dataSource: responseJson,
                }, function(){

                });
            })
        .catch((error) => {
                console.error(error);
            });
    }

    render() {

    return (

        if(this.state.isLoading){
            return(
                <View style={[styles.container, styles.horizontal]}>
                    <ActivityIndicator size="large"  color="#0000ff" />
                </View>
            )
        }

      <View style={styles.container}>
          <FlatList
              data={this.state.dataSource}
              renderItem={({item}) => <Text>{item.name}, {item.symbol}</Text>}
              keyExtractor={(item, index) => index}
          />
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
