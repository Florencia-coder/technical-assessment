import { StyleSheet } from "react-native";
import { colors, fontSizes } from "./themes";

export default styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundAlert,
    width: "92%",
    borderRadius: 8,
    padding: 12,
    display: "flex",
    flexDirection: "row",
    gap: 12,
    marginVertical: 22,
  },
  text: {
    width: "100%",
    color: colors.textGrey,
    fontWeight: "300",
    fontSize: fontSizes.xSmall,
  },
});
