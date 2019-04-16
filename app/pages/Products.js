import React, {Component} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import TopNav from '../components/TopNav';
import { Card, Icon } from 'react-native-elements';


export default class Products extends Component{

  static navigationOptions = ({navigation}) => {
    navigation.title = 'Products'
    return {
      header: <TopNav navigation={navigation}/>,
    };
  };
  render() {
    return (
      <View>
        <Card
  title='Virat Kholi'
  image={require('../images/1.jpg')}>
  <Text style={{marginBottom: 10}}>
  Virat Kohli is an Indian international cricketer who currently captains the India national team. A right-handed top-order batsman, Kohli is regarded as one of the best batsmen in the world. He plays for Royal Challengers Bangalore in the Indian Premier League, and has been the team's captain since 2013
  </Text>
  <Button
    icon={<Icon name='code' color='#ffffff' />}
    backgroundColor='#03A9F4'
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='VIEW NOW' />
</Card>

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