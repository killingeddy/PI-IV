import { StyleSheet } from "react-native";

const stylesMain = StyleSheet.create({
  navBar: {
    display: "flex",
    flexDirection: "row",
    width: "80vh",
    margin: "auto",
    flex: "1",
  },
  containerForm: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    flex: 0.8,
    paddingStart: "5%",
    paddingEnd: "5%",
  },
  container: {
    flex: 1,
    backgroundImage:
      "linear-gradient(336deg, rgba(34,110,121,1) 0%, rgba(36,120,133,1) 17%, rgba(47,141,155,1) 37%, rgba(52,149,164,1) 49%, rgba(55,154,170,1) 62%, rgba(57,160,176,1) 74%, rgba(67,181,198,1) 88%, rgba(78,197,216,1) 100%)",
  },
  containerLogo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerImg: {
    backgroundColor: "#DADADA",
    borderRadius: "50%",
    shadowColor: "#333",
    shadowOffset: {
      width: 3.2,
      height: 4.4,
    },
    shadowOpacity: 0.7,
    shadowRadius: 4,
    elevation: 5,
    borderWidth: 2.2,
    borderColor: "#333",
  },
  containerButton: {
    flex: 1,
  },
  button: {
    position: "absolute",
    backgroundColor: "#DADADA",
    borderRadius: 50,
    paddingVertical: 8,
    width: "60%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#333",
    shadowOffset: {
      width: 2.2,
      height: 3.5,
    },
    shadowOpacity: 0.7,
    shadowRadius: 2.6,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    color: "#333",
    fontWeight: "bold",
  },
});

export default stylesMain;
