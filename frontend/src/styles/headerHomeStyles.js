import { StyleSheet } from "react-native";
import { colors } from "./themes";

export default styles = StyleSheet.create({
  header: {
    width: "100%",
    backgroundColor: colors.darkGreen,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
