// src/styles/homeStyles.js
import { StyleSheet } from "react-native";
import { colors, fontSizes } from "./themes";

export default StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    alignItems: "center",
  },

  title: {
    fontSize: fontSizes.large,
    fontWeight: "bold",
    marginVertical: 16,
  },
  inputContainer: {
    width: "100%",
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: colors.darkGreen,
    alignItems: "center",
    justifyContent: "center",
    width: "92%",
    height: 40,
    borderRadius: 5,
    marginTop: 10,
    bottom: 18,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});
