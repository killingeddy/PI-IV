import React from "react";
import { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { login } from "../../Components/Login";
import stylesSignin from "./moduleCss";

export default function SignIn() {
  const navigation = useNavigation();
  const [loginEmail, setLoginEmail] = useState();
  const [loginSenha, setLoginSenha] = useState();

  const handleSignIn = async () => {
    login(loginEmail, loginSenha, navigation);
  };

  return (
    <View style={stylesSignin.container}>
      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={stylesSignin.containerHeader}>
        <Text
          style={stylesSignin.message}
          onPress={() => navigation.navigate("Inicio")}>
          Bem-vindo(a)
        </Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={stylesSignin.containerForm}>
        <Text style={stylesSignin.title}>E-mail</Text>
        <TextInput
          placeholder="Digite seu e-mail:"
          placeholderTextColor="#a1a1a1"
          style={stylesSignin.input}
          onChangeText={setLoginEmail}
        />

        <Text style={stylesSignin.title}>Senha</Text>
        <TextInput
          placeholder="Digite sua senha:"
          placeholderTextColor="#a1a1a1"
          style={stylesSignin.input}
          onChangeText={setLoginSenha}
        />

        <Pressable style={stylesSignin.buton} onPress={handleSignIn}>
          <Text style={stylesSignin.buttonText}>Acessar</Text>
        </Pressable>

        <Pressable
          style={stylesSignin.butonRegister}
          onPress={() => navigation.navigate("SignUp")}>
          <Text style={stylesSignin.registerText}>Cadastre-se</Text>
        </Pressable>
      </Animatable.View>
    </View>
  );
}
