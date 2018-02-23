//Import
import React from 'react';
import { AppRegistry, View, Image, TouchableOpacity, Text, Alert } from 'react-native';

//Formatações
const Estilos = {
  principal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botao: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20
  },
  textoBotao: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
};

const gerarNovaFrase = () => {
  var numeroAleatorio = Math.random();
  numeroAleatorio = Math.floor(numeroAleatorio * 5);

  var frases = Array();
  frases[0] = 'Uma frase doida aqui';
  frases[1] = '#PartiuCasaEstudarReacNative';
  frases[2] = 'Opaaa, frase novaaaa';
  frases[3] = 'Frase 4';
  frases[4] = 'Vamooooo timeee';

  var fraseEscolhida = frases[ numeroAleatorio ];
  
  Alert.alert(fraseEscolhida);
};

//Criar o componente
const App = () => {
  const { principal, botao, textoBotao } = Estilos;

  return (
    <View style={principal}>
      <Image source={require('./imgs/logo.png')} />
      
      <TouchableOpacity 
        style={botao} 
        onPress={gerarNovaFrase}
      >
        <Text style={textoBotao}> Nova frase </Text>
      </TouchableOpacity>
    </View>
  );
};

//Renderizar para o dispositivo
AppRegistry.registerComponent('app2', () => App);
