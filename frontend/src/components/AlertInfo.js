import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors } from "../styles/themes";
import styles from "../styles/alertInfoStyles";

const AlertInfo = () => {
  return (
    <View style={styles.container}>
      <Icon name="info-circle" size={20} color={colors.dark} />
      <Text style={styles.text}>
        To calculate the score:{"\n"}For each goal, 30 points will be added.
        {"\n"}For each shot, 5 points will be added.{"\n"}For each yellow card,
        5 points will be subtracted.
      </Text>
    </View>
  );
};

export default AlertInfo;
