import React, { useState, useRef, useEffect } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Modalize } from "react-native-modalize";
import ViewPlayersList from "./ViewPlayersList";
import { colors } from "../styles/themes";
import HeaderModal from "./subcomponents/HeaderModal";
import FooterModal from "./subcomponents/FooterModal";
import modalCreateListStyles from "../styles/modalCreateListStyles";

import {
  handleChange,
  fetchScores,
  generateScores,
  addPlayer,
  removePlayer,
  generateRandomTeams,
} from "./utils/useModalFunctions";

const ModalCreateList = ({ isOpen, setIsOpen, setScores }) => {
  const styles = modalCreateListStyles;
  const modalizeRef = useRef(null);
  const [players, setPlayers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [newPlayer, setNewPlayer] = useState({
    team: "",
    goals: "",
    yellow_cards: "",
    shots: "",
  });

  const onClose = () => {
    setIsOpen(false);
    modalizeRef.current?.close();
  };

  useEffect(() => {
    if (isOpen) {
      modalizeRef.current?.open();
      setPlayers([]);
    }
  }, [isOpen]);

  return (
    <>
      <Modalize
        ref={modalizeRef}
        adjustToContentHeight
        overlayStyle={styles.modalOverlay}
        modalStyle={styles.modalContainer}
        isOpen={isOpen}
        HeaderComponent={<HeaderModal onClose={onClose} />}
        FooterComponent={
          <FooterModal
            onPressRandom={() => generateRandomTeams(setPlayers)}
            onPressGet={() =>
              generateScores(
                () => fetchScores(players, setScores, setIsLoading),
                onClose
              )
            }
            disabledGet={players.length <= 0}
            isLoading={isLoading}
          />
        }
      >
        <View style={styles.modalContent}>
          <TextInput
            style={styles.input}
            placeholder="Team Name"
            value={newPlayer.team}
            onChangeText={(text) =>
              handleChange("team", text, setNewPlayer, newPlayer)
            }
          />
          <TextInput
            style={styles.input}
            placeholder="Goals"
            keyboardType="numeric"
            value={newPlayer.goals}
            onChangeText={(text) =>
              handleChange("goals", text, setNewPlayer, newPlayer)
            }
          />
          <TextInput
            style={styles.input}
            placeholder="Yellow Cards"
            keyboardType="numeric"
            value={newPlayer.yellow_cards}
            onChangeText={(text) =>
              handleChange("yellow_cards", text, setNewPlayer, newPlayer)
            }
          />
          <TextInput
            style={styles.input}
            placeholder="Shots"
            keyboardType="numeric"
            value={newPlayer.shots}
            onChangeText={(text) =>
              handleChange("shots", text, setNewPlayer, newPlayer)
            }
          />
          <TouchableOpacity
            style={styles.buttonAdd}
            onPress={() =>
              addPlayer(newPlayer, setPlayers, players, setNewPlayer)
            }
          >
            <Text style={styles.buttonTitle}>Add team</Text>
            <Icon name="plus" size={14} color={colors.darkGreen} />
          </TouchableOpacity>
          <ViewPlayersList
            players={players}
            removePlayer={(team) => removePlayer(team, players, setPlayers)}
          />
        </View>
      </Modalize>
    </>
  );
};

export default ModalCreateList;
