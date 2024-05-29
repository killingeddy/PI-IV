import React from "react";
import stylesCard from "./moduleCss";
import { Image } from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";

const AboutUs = () => {
  const navigation = useNavigation();
  return (
    <div style={stylesCard.body}>
      <header style={stylesCard.header}>
        <div
          style={stylesCard.cardIconLeft}
          onClick={() => navigation.navigate("Inicio")}></div>
        <div style={stylesCard.cardIconRight} id="menu"></div>
      </header>

      <main>
        <div style={stylesCard.container}>
          <div style={stylesCard.cardStyle}>
            <Image
              source={require("../../Assets/foto.jpg")}
              style={stylesCard.cardImg}
            />
            <div style={stylesCard.card}>
              <h1 style={stylesCard.cardNome}>Danilo</h1>
              <div style={stylesCard.cardIcon}>
                <div style={stylesCard.cardIconOne}></div>
                <div style={stylesCard.cardIconTwo}></div>
              </div>
              <p style={stylesCard.cardText}>
                Eu sou Gabriel Silva Takarada, tenho 20 anos e sou natural de
                Franca do Imperador onde vivo atualmente. Me voltei para o ramo
                da tecnologia logo após o Ensino Médio trabalhando em uma
                empresa de manutenção de computadores, a qual estou atualmente.
                Meus hobbies são principalmente animes e jogos, ademais gosto de
                esportes como basquete e patinação urbana.
              </p>
            </div>
          </div>
          <div style={stylesCard.cardStyle}>
            <Image
              source={require("../../Assets/foto.jpg")}
              style={stylesCard.cardImg}
            />
            <div style={stylesCard.card}>
              <h1 style={stylesCard.cardNome}>Eddie</h1>
              <div style={stylesCard.cardIcon}>
                <div style={stylesCard.cardIconOne}></div>
                <div style={stylesCard.cardIconTwo}></div>
              </div>
              <p style={stylesCard.cardText}>
                Eu sou Gabriel Silva Takarada, tenho 20 anos e sou natural de
                Franca do Imperador onde vivo atualmente. Me voltei para o ramo
                da tecnologia logo após o Ensino Médio trabalhando em uma
                empresa de manutenção de computadores, a qual estou atualmente.
                Meus hobbies são principalmente animes e jogos, ademais gosto de
                esportes como basquete e patinação urbana.
              </p>
            </div>
          </div>
          <div style={stylesCard.cardStyle}>
            <Image
              source={require("../../Assets/foto.jpg")}
              style={stylesCard.cardImg}
            />
            <div style={stylesCard.card}>
              <h1 style={stylesCard.cardNome}>Gabriel</h1>
              <div style={stylesCard.cardIcon}>
                <div style={stylesCard.cardIconOne}></div>
                <div style={stylesCard.cardIconTwo}></div>
              </div>
              <p style={stylesCard.cardText}>
                Eu sou Gabriel Silva Takarada, tenho 20 anos e sou natural de
                Franca do Imperador onde vivo atualmente. Me voltei para o ramo
                da tecnologia logo após o Ensino Médio trabalhando em uma
                empresa de manutenção de computadores, a qual estou atualmente.
                Meus hobbies são principalmente animes e jogos, ademais gosto de
                esportes como basquete e patinação urbana.
              </p>
            </div>
          </div>
          <div style={stylesCard.cardStyle}>
            <Image
              source={require("../../Assets/foto.jpg")}
              style={stylesCard.cardImg}
            />
            <div style={stylesCard.card}>
              <h1 style={stylesCard.cardNome}>Leonardo</h1>
              <div style={stylesCard.cardIcon}>
                <div style={stylesCard.cardIconOne}></div>
                <div style={stylesCard.cardIconTwo}></div>
              </div>
              <p style={stylesCard.cardText}>
                Eu sou Gabriel Silva Takarada, tenho 20 anos e sou natural de
                Franca do Imperador onde vivo atualmente. Me voltei para o ramo
                da tecnologia logo após o Ensino Médio trabalhando em uma
                empresa de manutenção de computadores, a qual estou atualmente.
                Meus hobbies são principalmente animes e jogos, ademais gosto de
                esportes como basquete e patinação urbana.
              </p>
            </div>
          </div>
          <div style={stylesCard.cardStyle}>
            <Image
              source={require("../../Assets/foto.jpg")}
              style={stylesCard.cardImg}
            />
            <div style={stylesCard.card}>
              <h1 style={stylesCard.cardNome}>Pauliane</h1>
              <div style={stylesCard.cardIcon}>
                <div style={stylesCard.cardIconOne}></div>
                <div style={stylesCard.cardIconTwo}></div>
              </div>
              <p style={stylesCard.cardText}>
                Eu sou Gabriel Silva Takarada, tenho 20 anos e sou natural de
                Franca do Imperador onde vivo atualmente. Me voltei para o ramo
                da tecnologia logo após o Ensino Médio trabalhando em uma
                empresa de manutenção de computadores, a qual estou atualmente.
                Meus hobbies são principalmente animes e jogos, ademais gosto de
                esportes como basquete e patinação urbana.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutUs;
