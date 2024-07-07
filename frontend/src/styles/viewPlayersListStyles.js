// src/styles/homeStyles.js
import { StyleSheet } from "react-native";
import { colors } from "./themes";

export default StyleSheet.create({
  playerList: {
    width: "100%",
  },
  playerItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  playerText: {
    color: colors.dark,
  },
});
