import { StyleSheet } from "react-native";

const stylesDash = StyleSheet.create({
  containerForm: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
  },
  container: {
    flex: 1,
    backgroundImage:
      "linear-gradient(325deg, rgba(34,110,121,1) 0%, rgba(36,120,133,1) 17%, rgba(47,141,155,1) 37%, rgba(55,154,170,1) 56%, rgba(57,160,176,1) 74%, rgba(67,181,198,1) 88%, rgba(78,197,216,1) 100%)",
  },
  containerLogo: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  containerImg: {
    width: "100vw",
    height: "100vh",
    shadowColor: "#333",
    shadowOffset: {
      width: 3.2,
      height: 4.4,
    },
    shadowOpacity: 0.7,
    shadowRadius: 4,
    elevation: 5,
  },
  cardIconLeft: {
    position: "absolute",
    display: "flex",
    marginLeft: "0",
    left: "0",
    alignItems: "center",
    justifyContent: "center",
    width: "50px",
    height: "50px",
    zIndex: "999",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 20,
  },
});

export default stylesDash;
