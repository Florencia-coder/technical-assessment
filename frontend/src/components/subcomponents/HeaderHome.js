import React from "react";
import { Text, View } from "react-native";
import styles from "../../styles/headerHomeStyles";

const HeaderHome = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>¡Welcome to Soccer Stats!</Text>
    </View>
  );
};

export default HeaderHome;
