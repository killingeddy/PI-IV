import AsyncStorage from "@react-native-async-storage/async-storage";

export const login = async (loginEmail, loginSenha, navigation) => {
  try {
    const userData = await AsyncStorage.getItem("userData");

    if (userData) {
      const users = JSON.parse(userData);

      const user = users.find((user) => user.email === loginEmail);

      if (user) {
        if (user.email == loginEmail && user.senha == loginSenha) {
          alert("Bem vindo");
          setTimeout(() => {
            navigation.navigate("Main");
          }, 1000);
        } else if (user.email !== loginEmail && user.senha == loginSenha) {
          alert("Email incorreto");
        } else if (user.email == loginEmail && user.senha !== loginSenha) {
          alert("Senha incorreta");
        } else {
          alert("Dados não cadastrados");
        }
      }
    } else {
      alert("Erro ao verificar cadastro");
    }
  } catch {
    alert("Falha ao obter dados");
  }
};
