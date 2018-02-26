import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet
} from 'react-native';

class Itens extends Component {

  render() {
    return (
        <View style={stylesItem.item}>
            <View style={stylesItem.foto}>
                <Image style={stylesItem.imagem} source={{ uri: this.props.item.foto }} />
            </View>
            <View style={stylesItem.detalhesItem}>
                <Text style={stylesItem.titulo}> { this.props.item.titulo} </Text>
                <Text style={stylesItem.valor}> R$ { this.props.item.valor} </Text>
                <Text style={stylesItem.txtDetalhes}> Local: { this.props.item.local_anuncio} </Text>
                <Text style={stylesItem.txtDetalhes}> Data publicação: { this.props.item.data_publicacao} </Text> 
            </View>           
        </View>
    );
  }
}

const stylesItem = StyleSheet.create({
    item: {
        borderWidth: 0.5,
        borderColor: '#999',
        margin: 10,
        padding: 10,
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    imagem: {
        alignItems: 'center',
        height: 100,
        width: 100
      },
    foto: {
        width: 102,
        height: 102
    },
    detalhesItem: {
        marginLeft: 20,
        flex: 1
    },
    titulo: {
        fontSize: 18,
        color: 'blue',
        marginBottom: 5
    },
    valor: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    txtDetalhes: {
        fontSize: 16
    }

  });

export default Itens;
