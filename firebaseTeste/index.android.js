import firebase from 'firebase';
import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text, 
  Button
} from 'react-native';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      pontuacao: 0
    }
  }

  componentWillMount() {
    var config = {
      apiKey: "AIzaSyAzax8Mq-GEPXqmLifUDUK_Kn9oBLaV7jc",
      authDomain: "configuracaofirebasereac-df197.firebaseapp.com",
      databaseURL: "https://configuracaofirebasereac-df197.firebaseio.com",
      projectId: "configuracaofirebasereac-df197",
      storageBucket: "configuracaofirebasereac-df197.appspot.com",
      messagingSenderId: "1018427000522"
    };
    firebase.initializeApp(config);
  }

  cadastrarUsuario() {
    //Cadastrando usuário
    var email = "mateusluisoliveira@gmail.com";
    var senha = "123456";

    const usuario = firebase.auth();

    usuario.createUserWithEmailAndPassword(email,senha).catch(
      (erro) => {
        //erro.code, erro.message
        alert( erro.message );
      }
    );
  }

  salvarDados() {
    var funcionarios = firebase.database().ref("funcionarios");
    //database.ref("pontuacao").set("120");
    //database.ref("pontuacao").remove();

    //funcionarios.push().child("nome").set("Mateus");
    funcionarios.push().set(
      {
        nome: "Mateus",
        altura: "1,75",
        peso: "8KG"
      }
    )
  }

  verificarUsuarioLogado() {
    const usuario = firebase.auth();

    usuario.onAuthStateChanged(
      (usuarioAtual) => {
        if (usuarioAtual) {
          alert("Usuário logado");
        } else {
          alert("Usuário não está logado");
        }
      }
    );
  }

  deslogarusuario() {
    const usuario = firebase.auth();

    usuario.signOut();
  }

  logarusuario() {
    var email = "mateusluisoliveira@gmail.com";
    var senha = "123456";

    const usuario = firebase.auth();

    usuario.signInWithEmailAndPassword(email,senha).catch(
      (erro) => {
        //erro.code, erro.message
        alert( erro.message );
      }
    );
  }

  listarDados() {
    var pontuacao = firebase.database().ref("pontuacao");
    pontuacao.on('value', (snapshot) => {
      var pontos = snapshot.val();
      this.setState( { pontuacao: pontos });
    });
  }
  render() {
     let {pontuacao} = this.state;

    return (
      <View >
        <Button 
          onPress={ ()=>{ this.salvarDados(); }}
          title="Salvar dados"
          color="#841584"
          accessibilityLaber="Salvar dados"
        />

        <Button 
          onPress={ ()=>{ this.listarDados(); }}
          title="Listar dados"
          color="#841584"
          accessibilityLaber="Listar dados"
        />

        <Button 
          onPress={ ()=>{ this.cadastrarUsuario(); }}
          title="Cadastrar Usuário"
          color="#841584"
          accessibilityLaber="Cadastrar Usuário"
        />

        <Button 
          onPress={ ()=>{ this.verificarUsuarioLogado(); }}
          title="Verificar Usuário Logado"
          color="#841584"
          accessibilityLaber="Verificar Usuário Logado"
        />

        <Button 
          onPress={ ()=>{ this.deslogarusuario(); }}
          title="Deslogar usuário"
          color="#841584"
          accessibilityLaber="Deslogar usuário"
        />

        <Button 
          onPress={ ()=>{ this.logarusuario(); }}
          title="logar usuário"
          color="#841584"
          accessibilityLaber="logar usuário"
        />
        <Text>{pontuacao}</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('firebaseTeste', () => App);
