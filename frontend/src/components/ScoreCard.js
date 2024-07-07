// src/components/ScoreCard.js
import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import scoreCardStyles from "../styles/scoreCardStyles";
import { colors } from "../styles/themes";

const ScoreCard = ({ score }) => {
  const styles = scoreCardStyles;

  return (
    <View style={styles.card}>
      <View style={styles.blockHeader}>
        <Text style={styles.name}>Team {score.team}</Text>
        <Icon
          style={styles.icon}
          name="soccer-ball-o"
          size={20}
          color={colors.darkGreen}
        />
      </View>
      <Text style={styles.points}>Score: {score.points}</Text>
    </View>
  );
};

export default ScoreCard;
