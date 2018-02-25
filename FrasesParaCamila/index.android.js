import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import ListaFrases from './src/components/ListaFrases';

export default class FrasesParaCamila extends Component {
  render() {
    return (
     <ListaFrases />
    );
  }
}

AppRegistry.registerComponent('FrasesParaCamila', () => FrasesParaCamila);
