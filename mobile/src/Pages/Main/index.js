import React from "react";
import { View, Text, Pressable } from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import stylesMain from "./moduleCss";

export default function Main() {
  const navigation = useNavigation();

  return (
    <View style={stylesMain.container}>
      <View style={stylesMain.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          style={stylesMain.containerImg}
          source={require("../../Assets/arduino.jpg")}
          resizeMode="contain"
          onPress={() => navigation.navigate("Inicio")}
        />
      </View>
      <Animatable.View
        delay={750}
        animation="fadeInUp"
        style={stylesMain.containerForm}>
        <Animatable.View
          delay={750}
          animation="fadeInUp"
          style={stylesMain.containerButton}>
          <Pressable
            style={stylesMain.button}
            onPress={() => navigation.navigate("Dashboard")}>
            <Text style={stylesMain.buttonText}> Dashboard </Text>
          </Pressable>
        </Animatable.View>
        <Animatable.View
          delay={750}
          animation="fadeInUp"
          style={stylesMain.containerButton}>
          <Pressable
            style={stylesMain.button}
            onPress={() => navigation.navigate("Detalhes")}>
            <Text style={stylesMain.buttonText}> Detalhes do projeto </Text>
          </Pressable>
        </Animatable.View>
        <Animatable.View
          delay={750}
          animation="fadeInUp"
          style={stylesMain.containerButton}>
          <Pressable
            style={stylesMain.button}
            onPress={() => navigation.navigate("Dados")}>
            <Text style={stylesMain.buttonText}> Dados do projeto </Text>
          </Pressable>
        </Animatable.View>
      </Animatable.View>
    </View>
  );
}
