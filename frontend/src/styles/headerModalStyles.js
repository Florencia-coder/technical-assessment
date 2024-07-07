import { StyleSheet } from "react-native";
import { colors, fontSizes } from "./themes";

export default StyleSheet.create({
  headerContainer: {
    width: "100%",
    padding: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: colors.darkGreen,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: 30,
    color: colors.darkGreen,
  },
});
