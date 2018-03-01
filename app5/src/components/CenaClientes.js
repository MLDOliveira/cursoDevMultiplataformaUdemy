import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Image,
  Text,
  StyleSheet
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const detalheCliente = require('../imgs/detalhe_cliente.png');
const cliente1 = require('../imgs/cliente1.png');
const cliente2 = require('../imgs/cliente2.png');

export default class CenaClientes extends Component {
  render() {
    return (
        <View style={{ flex: 1, backgroundColor: '#FFF' }}> 
            <StatusBar 
                backgroundColor='#B9C931'
            />
            
            <BarraNavegacao voltar navigator={this.props.navigator} corDeFundo='#B9C931' />

            <View style={styles.cabecalho} >
                <Image source={detalheCliente} />
                <Text style={styles.txtTitulo}> Nossos Clientes</Text>
            </View>

            <View style={styles.cliente}>
                <Image source={cliente1} />
                <Text style={styles.txtDetalheCliente}> Cliente 1 </Text>
            </View>

            <View style={styles.cliente}>
                <Image source={cliente2} />
                <Text style={styles.txtDetalheCliente}> Cliente 2 </Text>
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
        color: '#B9C931',
        fontSize: 30,
        marginLeft: 10,
        marginTop: 25
        //verticalAlign: 'center'
    },
    cliente: {
        //marginLeft: 10,
        padding: 20,
        marginTop: 10
    },
    txtDetalheCliente: {
        fontSize: 18,
        marginLeft: 20
    }

});
