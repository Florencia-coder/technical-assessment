import React from "react";
import { Text, View, FlatList } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import ScoreCard from "./ScoreCard";
import style from "../styles/viewScoresStyles";
import { colors } from "../styles/themes";

const ViewScores = ({ scores }) => {
  if (scores.length <= 0) {
    return (
      <View style={style.containerEmpty}>
        <Text style={style.emptyText}>
          Here the scores of each player will be shown
        </Text>
        <Icon name="chevron-down" size={30} color={colors.darkGreen} />
      </View>
    );
  }
  return (
    <FlatList
      style={style.container}
      data={scores}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <ScoreCard score={item} />}
    />
  );
};

export default ViewScores;
