import React from "react";
import { View, Text, Pressable } from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import stylesInicio from "./moduleCss";

export default function Inicio() {
  const navigation = useNavigation();

  return (
    <View style={stylesInicio.container}>
      <View style={stylesInicio.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          style={stylesInicio.containerImg}
          source={require("../../Assets/arduino.jpg")}
          resizeMode="contain"
        />
      </View>

      <Animatable.View
        delay={750}
        animation="fadeInUp"
        style={stylesInicio.containerForm}>
        <Text style={stylesInicio.title}>
          Olá, seja muito bem vindo ao nosso App.
        </Text>
        <Text style={stylesInicio.text}>Monitore seu projeto IOT.</Text>
        <Pressable
          style={stylesInicio.button}
          onPress={() => navigation.navigate("SignIn")}>
          <Text style={stylesInicio.buttonText}> Entrar </Text>
        </Pressable>
        <Text onPress={() => navigation.navigate("AboutUs")}>AboutUs</Text>
      </Animatable.View>
    </View>
  );
}
