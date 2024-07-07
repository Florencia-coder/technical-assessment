import React from "react";
import viewPlayersListStyles from "../styles/viewPlayersListStyles";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors } from "../styles/themes";

const ViewPlayersList = ({ players, removePlayer }) => {
  const styles = viewPlayersListStyles;

  return (
    <View style={styles.playerList}>
      {players.map((player, index) => (
        <View key={index} style={styles.playerItem}>
          <Text
            style={styles.playerText}
          >{`Team:${player.team} | Goals:${player.goals} | Yellow cards:${player.yellow_cards} | Shots: ${player.shots}`}</Text>
          <TouchableOpacity onPress={() => removePlayer(player.team)}>
            <Icon name="times-circle" size={18} color={colors.darkGreen} />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};
export default ViewPlayersList;
