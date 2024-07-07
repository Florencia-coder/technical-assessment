// src/styles/scoreCardStyles.js
import { StyleSheet } from "react-native";
import { colors, fontSizes } from "./themes";

export default StyleSheet.create({
  card: {
    marginVertical: 8,
    borderColor: colors.cardGreen,
    justifyContent: "space-between",
    display: "flex",
    alignItems: "center",
    borderWidth: 2,
    padding: 16,
    margin: 18,
    borderRadius: 8,
    height: 90,
    width: "60%",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "white",
  },
  blockHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
  },
  name: {
    fontSize: fontSizes.medium,
    fontWeight: "bold",
    marginBottom: 4,
    color: colors.darkGreen,
  },
  points: {
    fontSize: fontSizes.small,
    fontWeight: "700",
    color: colors.darkGreen,
  },
});
