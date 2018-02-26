import React, { Component } from 'react';
import {
  AppRegistry,
  StatusBar,
  View
} from 'react-native';

//Importar o compomente barra de navegação
import BarraNavegacao from './src/components/BarraNavegacao';

export default class app5 extends Component {
  render() {
    return (
     <View>
        <StatusBar 
          //hidden
          backgroundColor='#CCC'
        />
        <BarraNavegacao />
     </View>
    );
  }
}

AppRegistry.registerComponent('app5', () => app5);
