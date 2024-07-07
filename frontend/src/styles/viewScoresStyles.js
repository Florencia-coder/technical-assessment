import { StyleSheet } from "react-native";
import { colors } from "./themes";

export default styles = StyleSheet.create({
  containerEmpty: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
  container: { width: "100%", marginBottom: 20 },
  emptyText: { color: colors.dark },
});
