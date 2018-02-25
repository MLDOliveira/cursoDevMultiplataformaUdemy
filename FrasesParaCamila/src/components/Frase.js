import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';

class Frase extends Component {

  render() {
    return (
        <View>
            <Text> { this.props.frase.gsx$frase} </Text>           
        </View>
    );
  }
}

export default Frase;
