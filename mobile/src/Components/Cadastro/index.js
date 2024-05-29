import AsyncStorage from "@react-native-async-storage/async-storage";

export default class Cadastro {
  constructor(nome, email, senha, confirmarEmail, confirmarSenha) {
    this.nome = nome;
    this.email = email;
    this.senha = senha;
    this.confirmarEmail = confirmarEmail;
    this.confirmarSenha = confirmarSenha;
  }

  dados = async () => {
    const regexOne = /^[\A-Z][\a-z][^\0-9]+/;
    const regexTwo =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regexTree = /^[\A-Za-z0-9]+[*][0-9]+/;

    if (
      this.email == this.confirmarEmail &&
      this.senha == this.confirmarSenha
    ) {
      if (
        regexOne.test(this.nome) &&
        regexTwo.test(this.email) &&
        regexTree.test(this.senha)
      ) {
        try {
          const userData = await AsyncStorage.getItem("userData");
          const users = userData ? JSON.parse(userData) : [];
          users.push({
            nome: this.nome,
            email: this.email,
            senha: this.senha,
          });
          await AsyncStorage.setItem("userData", JSON.stringify(users));
          alert("Cadastrado");
          setTimeout(() => {
            navigation.navigate("SignIn");
          }, 1000);
        } catch {
          alert("Erro ao cadastrar");
        }
      } else if (
        !regexOne.test(this.nome) &&
        regexTwo.test(this.email) &&
        regexTree.test(this.senha)
      ) {
        alert(
          "O nome não segue o padrão estabelecido \n\n\nLetra maiúscula e o restante minúscula \n\n\nSegue o exemplo Daniel"
        );
      } else if (
        regexOne.test(this.nome) &&
        !regexTwo.test(this.email) &&
        regexTree.test(this.senha)
      ) {
        alert(
          "O e-mail não segue o padrão estabelecido \n\n\nEmail comum tendo arroba e ponto \n\n\nSegue o exemplo xxx@xxx.xxx"
        );
      } else if (
        regexOne.test(this.nome) &&
        regexTwo.test(this.email) &&
        !regexTree.test(this.senha)
      ) {
        alert(
          "A senha não está de acordo com os conformes de segurança \n\n\nTente uma senha com (letras e números) + números intercalado de * \n\n\nSegue o exemplo XxgtssABC111*191"
        );
      } else {
        alert("Dois campos ou mais estão errados");
      }
    } else {
      alert("Falha ao confirmar o email ou senha.");
    }
  };
}
