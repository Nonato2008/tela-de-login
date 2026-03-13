import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, StyleSheet, Alert, TouchableOpacity, KeyboardAvoidingView, Platform, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'

export default function App() {

  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [data, setData] = useState("");
  const [nome, setNome] = useState("");

  const realizarLogin = () => {
    if (!email || !senha) {
      Alert.alert("Preencha todos os campos")
    }
    if (!email.includes('@') || !email.includes('.')) {
      Alert.alert("Coloque @ ou .com para ser um email válido")
    } else {
      Alert.alert('Bem vindo(a) ' + email)
    }
  }


  return (

    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

        <View style={styles.card}>

          <Text style={styles.titulo}>CADASTRO</Text>

          <Text style={styles.label}>Nome</Text>
          <TextInput
            placeholder="Digite seu Nome"
            style={styles.input}
            onChangeText={setNome}
            value={nome}
          />

          <Text style={styles.label}>Telefone</Text>
          <TextInput
            value={telefone}
            placeholder="Número de telefone"
            style={styles.input}
            onChangeText={setTelefone}
            keyboardType='phone-pad'

          />

          <Text style={styles.label}>E-mail</Text>
          <TextInput
            placeholder="Email pessoal ou corporativo"
            style={styles.input}
            onChangeText={setEmail}
            value={email}
          />

          <Text style={styles.label}>Data de Nascimento</Text>
          <TextInput
            style={styles.input}
            placeholder='DD/MM/YYYY'
            value={data}
            onChangeText={setData}
          />


          <Pressable
            style={styles.botao}
            onPress={realizarLogin}>
            <Text style={styles.textoBotao}>Confirmar</Text>
          </Pressable>

        </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a0023",
    alignItems: "center",
    justifyContent: "center"
  },
  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 25,
    color: "#ffffff",


  },
  card: {
    width: "85%",
    backgroundColor: "#260138",
    borderRadius: 10,
    padding: 15,
    borderWidth: 1,
    elevation: 6,

    shadowColor: "#ffff",
    shadowOffset: {width: 4, height:4},
    shadowOpacity:1,
    shadowRadius:5
  },

  label: {
    width: "95%",
    marginTop: 10,
    fontWeight: "600",
    color: "#ffffff"
  },

  input: {
    width: "95%",
    borderWidth: 1,
    backgroundColor: '#f1e9e9',
    borderColor: '#5c024e',
    marginBottom: 20,
    padding: 15,
    borderRadius: 5,
    alignSelf: "center",


  },
  botao: {
    backgroundColor: '#bb00ff',
    padding: 15,
    borderRadius: 30,
    marginTop: 10,
    alignItems: 'center',
    marginTop: '5%'
  },
  textoBotao: {
    color: '#fafafa',
    fontWeight: 'bold',
    fontSize: 15
  }
});
