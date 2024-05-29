import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";

export const valores = async (medida1, medida2, medida3, medida4) => {
  gas = medida1;
  temperatura = medida2;
  fogo = medida3;
  humidade = medida4;

  const regexGas = /^[0-9]+[ppm]/;
  const regexTemperatura = /^[0-9]+[C]/;
  const regexHumidade = /^[0-9]+[%]/;
  const regexFogo = /^[0-9]+[Mj/m]/;

  try {
    if (
      regexGas.test(gas) ||
      regexTemperatura.test(temperatura) ||
      regexHumidade.test(fogo) ||
      regexFogo.test(humidade)
    ) {
      const infoData = await AsyncStorage.getItem("infoData");
      const info = infoData ? JSON.parse(infoData) : [];
      info.push({
        medida1: gas,
        medida2: temperatura,
        medida3: fogo,
        medida4: humidade,
      });
      await AsyncStorage.setItem("infoData", JSON.stringify(info));
    } else {
      alert("Nenhum dado recebido!!!");
    }
  } catch {
    alert("Sem informações disponíveis");
  }
};
