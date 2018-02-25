import React, { Component } from 'react';
import {
  ScrollView,
  Text
} from 'react-native';

import axios from 'axios';
import Frase from './Frase';

const pre = 'https://spreadsheets.google.com/feeds/list/';
const id = '1hd5tDAN4jXb8-NlXKqcAoy8lnHBp4ecx6zghYvKVnz4';
const pos = '/od6/public/values?alt=json';

const url = pre + id + pos;

class ListaFrases extends Component {

    constructor(props) {
        super(props);
        this.state = { listaFrases: [] };
    }

    componentWillMount() {
        axios.get(url)
        //.then(response => { this.setState({ listaFrases: response.data }); })
        .then(response => { console.log(response.data.feed.entry); })
        .catch(() => { console.log('Erro ao recuperar os dados'); });
    }

    render() {
        return (
        <ScrollView>
            { this.state.listaFrases.map(frase => (<Frase key={frase.id} frase={frase} />)) }
        </ScrollView>
        );
      }
    }
    export default ListaFrases;
