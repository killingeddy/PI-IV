import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { valores } from "../../Components/Valores";
import AsyncStorage from "@react-native-async-storage/async-storage";
import stylesData from "./muduleCss";

export default function Dados() {
  const [medida1, setMedida1] = useState("");
  const [medida2, setMedida2] = useState("");
  const [medida3, setMedida3] = useState("");
  const [medida4, setMedida4] = useState("");
  const navigation = useNavigation();

  const handleInfo = async () => {
    valores(medida1, medida2, medida3, medida4);
  };

  const handleReturn = async () => {
    try {
      const infoData = await AsyncStorage.getItem("infoData");
      if (infoData) {
        const [gas, temperatura, fogo, mls] = JSON.parse(infoData);
        setMedida1(gas);
        setMedida2(temperatura);
        setMedida3(fogo);
        setMedida4(mls);
      }
    } catch (error) {
      console.error("Erro ao recuperar dados do AsyncStorage:", error);
    }
  };

  return (
    <View style={stylesData.container}>
      <View style={stylesData.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          style={stylesData.containerImg}
          source={require("../../Assets/arduino.jpg")}
          resizeMode="contain"
        />
      </View>
      <View style={stylesData.containerText}>
        <Text
          style={stylesData.textCenter}
          onPress={() => navigation.navigate("Main")}>
          Dados do Sistema:
        </Text>
        <Text style={stylesData.subText}>
          DADOS EM TEMPO REAL DIRETAMENTE DO ARDUÍNO
        </Text>
      </View>
      <View style={stylesData.exibir}>
        <TextInput
          style={stylesData.info}
          onChangeText={(e) => setMedida1(e)}
        />
        <TextInput
          style={stylesData.info}
          onChangeText={(e) => setMedida2(e)}
        />
        <TextInput
          style={stylesData.info}
          onChangeText={(e) => setMedida3(e)}
        />
        <TextInput
          style={stylesData.info}
          onChangeText={(e) => setMedida4(e)}
        />
      </View>
      <Pressable style={stylesData.button} onPress={handleInfo}>
        <Text style={stylesData.buttonText}>Obter Dados</Text>
      </Pressable>
      <Pressable style={stylesData.button} onPress={handleReturn}>
        <Text style={stylesData.buttonText}>Passar Dados</Text>
      </Pressable>
      <Animatable.View
        delay={750}
        animation="fadeInUp"
        style={stylesData.containerInfo}>
        <View style={stylesData.divInfos}>
          <Text>GÁS</Text>
          <Text>{medida1}</Text>
        </View>
        <View style={stylesData.divInfos}>
          <Text>TEMPERATURA</Text>
          <Text>{medida2}</Text>
        </View>
        <View style={stylesData.divInfos}>
          <Text>FOGO</Text>
          <Text>{medida3}</Text>
        </View>
        <View style={stylesData.divInfos}>
          <Text>MLs</Text>
          <Text>{medida4}</Text>
        </View>
      </Animatable.View>
    </View>
  );
}
