import { StyleSheet } from "react-native";

const stylesSignup = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#39A0B0",
  },
  containerHeader: {
    marginTop: "10%",
    marginBottom: "4%",
    paddingStart: "5%",
  },
  message: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
  },
  containerForm: {
    backgroundColor: "white",
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
  },
  title: {
    fontSize: 17,
    marginTop: 24,
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
  },
  buton: {
    backgroundColor: "#39A0B0",
    width: "100%",
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: "18",
    fontWeight: "bold",
  },
  butonRegister: {
    marginTop: 14,
    alignSelf: "center",
  },
  registerText: {
    color: "#a1a1a1",
  },
});

export default stylesSignup;
