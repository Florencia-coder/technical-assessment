import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import headerModalStyles from "../../styles/headerModalStyles";
import { colors } from "../../styles/themes";

const HeaderModal = ({ onClose }) => {
  const styles = headerModalStyles;

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>Create players list</Text>
      <TouchableOpacity onPress={() => onClose()}>
        <Icon name="times-circle" size={32} color={colors.darkGreen} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderModal;
