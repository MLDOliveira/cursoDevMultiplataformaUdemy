import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Image,
  Text,
  StyleSheet
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const detalheContatos = require('../imgs/detalhe_contato.png');

export default class CenaContatos extends Component {
  render() {
    return (
        <View style={{ flex: 1, backgroundColor: '#FFF' }}>
            <StatusBar 
                backgroundColor='#61DB8C'
            />
            
            <BarraNavegacao voltar navigator={this.props.navigator} corDeFundo='#61DB8C' />

            <View style={styles.cabecalho} >
                <Image source={detalheContatos} />
                <Text style={styles.txtTitulo}> Contatos </Text>
            </View>

            <View style={styles.detalheContatos}>
                
                <Text style={styles.txtContatos}> TEL: (11) 8888-9999 </Text>
                <Text style={styles.txtContatos}> CEL: (22) 8888-9999 </Text>
                <Text style={styles.txtContatos}> EMAIL </Text>
            </View>

     </View>
    );
  }
}

const styles = StyleSheet.create({
    cabecalho: {
        flexDirection: 'row',
        marginTop: 20,
    },
    txtTitulo: {
        color: '#61DB8C',
        fontSize: 30,
        marginLeft: 10,
        marginTop: 25
        //verticalAlign: 'center'
    },
    detalheContatos: {
        //marginLeft: 10,
        padding: 20,
        marginTop: 20
    },
    txtContatos: {
        fontSize: 18
    }
});
