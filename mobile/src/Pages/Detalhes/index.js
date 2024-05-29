import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import stylesDetails from "./moduleCss";

export default function Detalhes() {
  const navigation = useNavigation();

  return (
    <View style={stylesDetails.container}>
      <View style={stylesDetails.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          style={stylesDetails.containerImg}
          source={require("../../Assets/gasFirst.png")}
          resizeMode="contain"
        />
      </View>

      <View style={stylesDetails.separator}></View>

      <Text
        style={stylesDetails.title}
        onPress={() => navigation.navigate("Main")}>
        Componentes
      </Text>

      <View style={stylesDetails.paragrafos}>
        <View style={stylesDetails.first}>
          <Text>◾Placa Arduino</Text>
          <Text>◾Protoboard</Text>
          <Text>◾Resistores</Text>
          <Text>◾Sensor de Gás</Text>
        </View>

        <View style={stylesDetails.second}>
          <Text>◾Termômetro</Text>
          <Text>◾Buzzer</Text>
          <Text>◾Leds</Text>
          <Text>◾Bomba d'agua</Text>
        </View>
      </View>

      <View style={stylesDetails.separator}></View>

      <View style={stylesDetails.proj}>
        <Text style={stylesDetails.explicacao}>Projeto em ação</Text>
        <View style={stylesDetails.textoExplicacao}>
          <Text>
            Nosso projeto consiste em montar um sistema central de alarmes
            contra incêndios, tendo como objetivo principal ser um sistema
            completo, possuindo sensores de gás e de chamas e também presa pela
            acessibilidade com alarmes e luzes incluindo pessoas com algumas
            possíveis deficiências.
          </Text>
        </View>
      </View>
    </View>
  );
}
