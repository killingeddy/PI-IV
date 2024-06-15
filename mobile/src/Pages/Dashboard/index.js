import React from "react";
import { View, Text, Pressable } from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import stylesDash from "./moduleCss";
import { Image } from "react-native-animatable";

export default function Dashboard() {
  const navigation = useNavigation();

  return (
    <View style={stylesDash.container}>
      <Image
        source={require("../../Assets/voltar.png")}
        onClick={() => navigation.navigate("Main")}
        style={stylesDash.cardIconLeft}
      />
      <View style={stylesDash.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          style={stylesDash.containerImg}
          source={require("../../Assets/Captura de tela 2024-06-15 045528.png")}
          resizeMode="contain"
        />
      </View>
      <Animatable.View
        delay={750}
        animation="fadeInUp"
        style={stylesDash.containerForm}>
        <Text style={stylesDash.title}>DASHBOARD</Text>
        <Text>
          Temos aqui varios graficos formando assim nosso Dashboard que compara
          e apresente diversos valores, como o fogo que é medido em mega joules
          por metro quadrado, temperatura em graus Celcius, gás em partes por
          milhão, além de valores de humidade. Lembrando que todos estes valores
          foram adquiridos baseado em parametros reais, para simular algo que
          estaria realmente no dia a dia.
        </Text>
      </Animatable.View>
    </View>
  );
}
