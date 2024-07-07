// src/styles/homeStyles.js
import { StyleSheet } from "react-native";
import { colors, fontSizes } from "./themes";

export default StyleSheet.create({
  modalOverlay: { backgroundColor: "rgba(0, 47, 75, 0.5)" },
  modalContainer: {
    backgroundColor: colors.background,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalContent: {
    padding: 18,
  },
  input: {
    width: "100%",
    padding: 2,
    paddingHorizontal: 6,
    borderWidth: 1,
    borderColor: colors.darkGreen,
    borderRadius: 12,
    marginBottom: 10,
  },
  buttonAdd: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
    marginBottom: 8,
    borderBottomColor: colors.darkGreen,
    borderBottomWidth: 1,
    width: "22%",
  },
  buttonTitle: {
    fontWeight: "400",
    color: colors.darkGreen,
  },
});
