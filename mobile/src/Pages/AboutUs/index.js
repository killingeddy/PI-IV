import React from "react";
import stylesCard from "./moduleCss";
import { Image } from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";

const AboutUs = () => {
  const navigation = useNavigation();
  return (
    <div style={stylesCard.body}>
      <header style={stylesCard.header}>
        <Image
          source={require("../../Assets/voltar.png")}
          onClick={() => navigation.navigate("Main")}
          style={stylesCard.cardIconLeft}
        />
      </header>

      <main>
        <div style={stylesCard.container}>
          <div style={stylesCard.cardStyle}>
            <Image
              source={require("../../Assets/Danilo.jpg")}
              style={stylesCard.cardImg}
            />
            <div style={stylesCard.card}>
              <h1 style={stylesCard.cardNome}>Danilo</h1>
              <div style={stylesCard.cardIcon}>
                <a href="https://github.com/killingeddy/PI-IV">
                  <Image
                    source={require("../../Assets/git.png")}
                    style={stylesCard.cardIconOne}
                  />
                </a>
                <a href="https://www.youtube.com/watch?v=WZ9PkR74AnE">
                  <Image
                    source={require("../../Assets/youtu.png")}
                    style={stylesCard.cardIconTwo}
                  />
                </a>
              </div>
              <p style={stylesCard.cardText}>
                Estou cursando Desenvolvimento de Software Multiplataforma,
                tenho 20 anos e sou surdo. Tenho conhecimentos em tecnologias de
                frontend, HTML, CSS, JavaScript e Typescript.
              </p>
            </div>
          </div>
          <div style={stylesCard.cardStyle}>
            <Image
              source={require("../../Assets/Eddie.jpg")}
              style={stylesCard.cardImg}
            />
            <div style={stylesCard.card}>
              <h1 style={stylesCard.cardNome}>Eddie</h1>
              <div style={stylesCard.cardIcon}>
                <a href="https://github.com/killingeddy">
                  <Image
                    source={require("../../Assets/git.png")}
                    style={stylesCard.cardIconOne}
                  />
                </a>
                <a href="https://www.youtube.com/watch?v=WZ9PkR74AnE">
                  <Image
                    source={require("../../Assets/youtu.png")}
                    style={stylesCard.cardIconTwo}
                  />
                </a>
              </div>
              <p style={stylesCard.cardText}>
                Sou um desenvolvedor Full-Stack brasileiro de 19 anos com forte
                foco em desenvolvimento frontend e mobile. Atualmente sou
                estudante de Desenvolvimento de Software Multiplataforma, com
                vontade de ampliar minhas habilidades e contribuir com projetos
                inovadores. Apaixonado por criar interfaces fáceis de usar e
                criar experiências móveis envolventes. Vamos codificar e
                construir algo incrível juntos!
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
                <a href="https://github.com/GabrielTakarada">
                  <Image
                    source={require("../../Assets/git.png")}
                    style={stylesCard.cardIconOne}
                  />
                </a>
                <a href="https://www.youtube.com/watch?v=WZ9PkR74AnE">
                  <Image
                    source={require("../../Assets/youtu.png")}
                    style={stylesCard.cardIconTwo}
                  />
                </a>
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
              source={require("../../Assets/Leo.jpg")}
              style={stylesCard.cardImg}
            />
            <div style={stylesCard.card}>
              <h1 style={stylesCard.cardNome}>Leonardo</h1>
              <div style={stylesCard.cardIcon}>
                <a href="https://github.com/Leonardo-henriqu2">
                  <Image
                    source={require("../../Assets/git.png")}
                    style={stylesCard.cardIconOne}
                  />
                </a>
                <a href="https://www.youtube.com/watch?v=WZ9PkR74AnE">
                  <Image
                    source={require("../../Assets/youtu.png")}
                    style={stylesCard.cardIconTwo}
                  />
                </a>
              </div>
              <p style={stylesCard.cardText}>
                Tenho 25 anos, estou cursando Desenvolvimento de Software
                Multiplataforma, falante da língua inglesa. Na faculdade estou
                adquirindo conhecimento em desenvolvimento back-end no qual me
                interessei mais. Principais tecnologias: Linguagem C, Python,
                Node, Java. Também estudamos Banco de Dados relacionais como:
                SQL Server, PostgreSLQ e não relacionais como MongoDB.
              </p>
            </div>
          </div>
          <div style={stylesCard.cardStyle}>
            <Image
              source={require("../../Assets/Pauliane.jpg")}
              style={stylesCard.cardImg}
            />
            <div style={stylesCard.card}>
              <h1 style={stylesCard.cardNome}>Pauliane</h1>
              <div style={stylesCard.cardIcon}>
                <a href="https://github.com/PaulianeSilveira">
                  <Image
                    source={require("../../Assets/git.png")}
                    style={stylesCard.cardIconOne}
                  />
                </a>
                <a href="https://www.youtube.com/watch?v=WZ9PkR74AnE">
                  <Image
                    source={require("../../Assets/youtu.png")}
                    style={stylesCard.cardIconTwo}
                  />
                </a>
              </div>
              <p style={stylesCard.cardText}>
                Após mais de 10 anos dedicados ao serviço público e uma
                graduação em Turismo, decidi ampliar meus horizontes através de
                uma segunda graduação em Desenvolvimento de Software, ao mesmo
                tempo em que mergulho em uma residência em tecnologia focada em
                IA e Visão Computacional. Creio no poder da tecnologia para
                transformar vidas e estou ansiosa para colaborar nessa jornada
                rumo ao futuro digital!
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutUs;
