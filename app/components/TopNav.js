import React, { Component } from 'react';
import { View } from 'react-native';
import { Icon, Header } from 'react-native-elements';

export default class TopNav extends Component{
    render() {
        return(
            <View>
            {/* <Icon
            raised
            name='home'
            type='font-awesome'
            color='#f50'
            onPress={() => console.log('Hello')}
             >
           </Icon> */}
            <Header
              leftComponent={{ icon: 'home', color: '#fff', }}s
              centerComponent={{ text: this.props.navigation.title, style: { color: '#fff' } }}
              rightComponent={{ icon: 'cart-plus', type:'font-awesome', color: '#fff' }}
            />
          </View>
        )
    }
}