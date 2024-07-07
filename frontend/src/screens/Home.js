// src/screens/Home.js
import React, { useState } from "react";
import { Text, StatusBar, SafeAreaView, TouchableOpacity } from "react-native";
import homeStyles from "../styles/homeStyles";
import ModalCreateList from "../components/ModalCreateList";
import { colors } from "../styles/themes";
import ViewScores from "../components/ViewScores";
import AlertInfo from "../components/AlertInfo";
import HeaderHome from "../components/subcomponents/HeaderHome";

const Home = () => {
  const [scores, setScores] = useState([]);
  const styles = homeStyles;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.darkGreen} />
      <HeaderHome />
      <AlertInfo />
      <ViewScores scores={scores} />
      <TouchableOpacity style={styles.addButton} onPress={openModal}>
        <Text style={styles.buttonText}>Create Players List</Text>
      </TouchableOpacity>
      <ModalCreateList
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        setScores={setScores}
      />
    </SafeAreaView>
  );
};

export default Home;
