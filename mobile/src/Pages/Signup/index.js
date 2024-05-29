import React from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import stylesSignup from "./moduleCss";

export default function SignUp() {
  const navigation = useNavigation();

  return (
    <View style={stylesSignup.container}>
      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={stylesSignup.containerHeader}>
        <Text
          style={stylesSignup.message}
          onPress={() => navigation.navigate("SignIn")}>
          Tela de cadastro
        </Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={stylesSignup.containerForm}>
        <Text style={stylesSignup.title}>Nome de Usuário</Text>
        <TextInput
          placeholder="Digite seu nome de Usuário:"
          placeholderTextColor="#a1a1a1"
          style={stylesSignup.input}
        />

        <Text style={stylesSignup.title}>E-mail</Text>
        <TextInput
          placeholder="Digite seu e-mail:"
          placeholderTextColor="#a1a1a1"
          style={stylesSignup.input}
        />

        <Text style={stylesSignup.title}>Senha</Text>
        <TextInput
          placeholder="Digite sua senha:"
          placeholderTextColor="#a1a1a1"
          style={stylesSignup.input}
        />

        <Text style={stylesSignup.title}>Confirmar e-mail</Text>
        <TextInput
          placeholder="Confirme seu e-mail:"
          placeholderTextColor="#a1a1a1"
          style={stylesSignup.input}
        />

        <Text style={stylesSignup.title}>Confirmar senha</Text>
        <TextInput
          placeholder="Confirme sua senha:"
          placeholderTextColor="#a1a1a1"
          style={stylesSignup.input}
        />

        <Pressable
          style={stylesSignup.buton}
          onPress={() => navigation.navigate("SignIn")}>
          <Text style={stylesSignup.buttonText}>Cadastrar-se</Text>
        </Pressable>
      </Animatable.View>
    </View>
  );
}
