import React, {Component} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';


export default class Invoice extends Component{
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to Invoice Page</Text>
      <Button title='Go Home'
      onPress={() => this.props.navigation.navigate('Home')}
      ></Button>
     </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});