import { StyleSheet } from "react-native";
import { colors, fontSizes } from "./themes";

export default StyleSheet.create({
  footerContainer: {
    paddingHorizontal: 18,
    marginBottom: 18,
  },
  button: {
    backgroundColor: colors.darkGreen,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    borderRadius: 8,
    marginTop: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: "white",
    fontSize: fontSizes.medium,
  },
});
