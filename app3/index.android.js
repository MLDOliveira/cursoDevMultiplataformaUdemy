import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  StyleSheet
} from 'react-native';

import Topo from './src/components/topo';
import Icone from './src/components/icone';

class app3 extends Component {

  constructor(props) {
    super(props);

    this.state = { escolhaUsuario: '', escolhaComputador: '', resultado: '' };
  }

  jokenpo(escolhaUsuario) {
    //Gera numero aleatório (0, 1, 2)
    const numAleatorio = Math.floor(Math.random() * 3);

    let escolhaComputador = '';

    switch (numAleatorio) {
      case 0: escolhaComputador = 'pedra'; break;
      case 1: escolhaComputador = 'papel'; break;
      case 2: escolhaComputador = 'tesoura'; break;
      default: escolhaComputador = '';
    }

    let resultado = '';

    //Tratando o empate
    if (escolhaComputador === escolhaUsuario) {
      resultado = 'Empate';
    } else if ((escolhaComputador === 'pedra' && escolhaUsuario === 'tesoura') ||
               (escolhaComputador === 'papel' && escolhaUsuario === 'pedra') ||
               (escolhaComputador === 'tesoura' && escolhaUsuario === 'papel')) {
      resultado = 'Você perdeu';
    } else {
      resultado = 'Você ganhou!';
    }

    this.setState({ escolhaUsuario, escolhaComputador, resultado });
  }

  render() {
    return (
      <View>

        <Topo />
       
        <View style={styles.painelAcoes}> 
          <View style={styles.btnEscolha}> 
            <Button title="pedra" onPress={() => { this.jokenpo('pedra'); }} />
          </View>
          
          <View style={styles.btnEscolha}> 
            <Button title="papel" onPress={() => { this.jokenpo('papel'); }} />
          </View>

          <View style={styles.btnEscolha}> 
            <Button title="tesoura" onPress={() => { this.jokenpo('tesoura'); }} />
          </View>
        </View>

        <View style={styles.palco}> 
          <Text style={styles.txtResultado}>{this.state.resultado}</Text>
          <Icone escolha={this.state.escolhaComputador} jogador={'Computador'} />
          <Icone escolha={this.state.escolhaUsuario} jogador={'Você'} />        
        </View> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btnEscolha: {
    width: 90
  },
  painelAcoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  palco: {
    alignItems: 'center',
    marginTop: 10
  },
  txtResultado: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    height: 60
  }
});

AppRegistry.registerComponent('app3', () => app3);
