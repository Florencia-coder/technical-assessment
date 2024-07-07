import React from "react";
import { Text, View, TouchableOpacity, ActivityIndicator } from "react-native";
import footerModalStyles from "../../styles/footerModalStyles";
import { colors } from "../../styles/themes";

const FooterModal = ({ onPressRandom, onPressGet, disabledGet, isLoading }) => {
  const styles = footerModalStyles;

  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity style={styles.button} onPress={onPressRandom}>
        <Text style={styles.buttonText}>Generate random list</Text>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={disabledGet || isLoading}
        style={styles.button}
        onPress={onPressGet}
      >
        {isLoading ? (
          <ActivityIndicator color={colors.white} />
        ) : (
          <Text style={styles.buttonText}>Get scores</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default FooterModal;
