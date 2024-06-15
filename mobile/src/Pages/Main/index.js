import React, { useEffect } from "react";
import { View, Text, Pressable } from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import stylesMain from "./moduleCss";
import { useState } from "react";
import { Image } from "react-native-animatable";

export default function Main() {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // 5 segundos

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={stylesMain.container}>
      {isLoading ? (
        <View style={stylesMain.loadingContainer}>
          <Animatable.Image
            animation="flipInY"
            style={stylesMain.containerImgLoad}
            source={require("../../Assets/loads.gif")}
            resizeMode="contain"
          />
        </View>
      ) : (
        <View View style={stylesMain.container}>
          <Image
            source={require("../../Assets/voltar.png")}
            onClick={() => navigation.navigate("SignIn")}
            style={stylesMain.cardIconLeft}
          />
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
                onPress={() => navigation.navigate("AboutUs")}>
                <Text style={stylesMain.buttonText}> About Us </Text>
              </Pressable>
            </Animatable.View>
          </Animatable.View>
        </View>
      )}
    </View>
  );
}
