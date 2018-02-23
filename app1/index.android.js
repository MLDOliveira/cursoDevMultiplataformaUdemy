import React from 'react';
import { Text, View, Button, AppRegistry } from 'react-native';

const geraNumeroAleatorio = () => {
  var numero_aleatronio = Math.random();

  numero_aleatronio = Math.floor(numero_aleatronio * 10);
  alert (numero_aleatronio);
}

const App = () => {
  return (
    <View>
      <Text>Gerador de números randômicos</Text>
      <Button
        title="Gerar um número randômico"
        onPress={geraNumeroAleatorio}
      />
    </View>
  );
};

AppRegistry.registerComponent('app1',() => App );