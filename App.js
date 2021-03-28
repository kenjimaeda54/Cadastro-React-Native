import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, Text, Button } from 'react-native';
import firebase from './src/firebase/firebaseconection'

console.disableYellowBox = true;

export default function App() {

  //Criar um (nó)
      //await firebase.database().ref('tipo').set('Vendedor');

      //Remove um nó
      //await firebase.database().ref('tipo').remove();

      // await firebase.database().ref('usuarios').child(3).set({
      //   nome: 'Jose',
      //   cargo: 'Programador Junior'
      // });

      // await firebase.database().ref('usuarios').child(3)
      // .update({
      //   nome: 'Jose augusto'
      // 



  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')

  async function cadastrar() {
    let usuario = await firebase.database().ref('Usuarios')
    let chave = usuario.push().key;
    if (nome != '' || cargo != '') {
      usuario.child(chave).set({
        nome: nome,
        cargo: cargo
      })
      alert('Usuario cadastrado com sucesso')
      setNome('');
      setCargo('');
      //sem value no campo do Text Input não seria possivel zerar o nome e cargo 
    } else {
      alert('Complete os campos')
    }

  }


  return (
    <View style={styles.container}>

      <Text style={styles.text} >Nome</Text>

      <TextInput
        placeholder="Seu nome"
        value={nome}
        onChangeText={(item) => setNome(item)}
        style={styles.textInput}
      />

      <Text style={styles.text}>Cargo</Text>

      <TextInput
        placeholder="Cargo"
        value={cargo}
        //necessario o value.Caso não coloque sera impossivel,manipular
        //valor que usuario colocou ou seja por exemplo apagar este estado
        onChangeText={(item) => setCargo(item)}
        style={styles.textInput}
      />

      <Button
        title="Cadastrar"
        onPress={cadastrar}
        style={styles.button}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    borderColor: 'black',
    borderRadius: 5,
    backgroundColor: '#dddd',
    color: 'black',
    fontSize: 16,
    marginBottom: 10,
    marginTop: 10,
    textAlign: 'center',
    width: '90%',
    height: 100,
  },
  text: {
    color: 'black',
    fontSize: 26,
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5,
    color: 'blue',
    width: '90%',
    height: 100,
  }

});
