import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  TouchableHighlight
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const logo = require('../imgs/logo.png');
const menuCliente = require('../imgs/menu_cliente.png');
const menuContato = require('../imgs/menu_contato.png');
const menuEmpresa = require('../imgs/menu_empresa.png');
const menuServico = require('../imgs/menu_servico.png');

export default class CenaPrincipal extends Component {
  render() {
    return (
        <View>
            <StatusBar 
            backgroundColor='#CCC'
            />
            
            <BarraNavegacao />
            
            <View style={styles.logo}> 
                <Image source={logo} />
            </View>

            <View style={styles.menus}>
                <View style={styles.menuGrupo}>
                    <TouchableHighlight
                        onPress={() => {
                            this.props.navigator.push({ id: 'clientes' });
                        }}
                    >
                        <Image source={menuCliente} style={styles.imgMenu} />    
                    </TouchableHighlight>
                    
                    <TouchableHighlight
                        onPress={() => {
                            this.props.navigator.push({ id: 'contatos' });
                        }}
                    >
                        <Image source={menuContato} style={styles.imgMenu} />
                    </TouchableHighlight>
                </View>
                    
                <View style={styles.menuGrupo} >
                    <TouchableHighlight
                        onPress={() => {
                            this.props.navigator.push({ id: 'empresa' });
                        }}
                    >
                        <Image source={menuEmpresa} style={styles.imgMenu} />
                    </TouchableHighlight>
                    
                    <TouchableHighlight
                        onPress={() => {
                            this.props.navigator.push({ id: 'servicos' });
                        }}
                    >
                        <Image source={menuServico} style={styles.imgMenu} />
                    </TouchableHighlight>
                </View>
            </View>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    alignItems: 'center',
    marginTop: 30,
  },
  menus: {
    alignItems: 'center',
  },
  imgMenu: {
    margin: 15
  },
  menuGrupo: {
      flexDirection: 'row'
  }

});
