import { Alert } from "react-native";
import { getScores } from "../../services/api";

export const handleChange = (key, value, setNewPlayer, newPlayer) => {
  setNewPlayer({
    ...newPlayer,
    [key]: value,
  });
};

export const fetchScores = async (players, setScores, setIsLoading) => {
  setIsLoading(true);
  try {
    const data = await getScores(players);
    setScores(data);
  } catch (error) {
    console.error(error);
  } finally {
    setIsLoading(false);
  }
};

export const generateScores = async (fetchScores, onClose) => {
  await fetchScores();
  onClose();
};

export const addPlayer = (newPlayer, setPlayers, players, setNewPlayer) => {
  const { team, goals, yellow_cards, shots } = newPlayer;
  if (!team || !goals || !yellow_cards || !shots) {
    Alert.alert("Error", "All fields are required.");
    return;
  }
  setPlayers([...players, { ...newPlayer }]);
  setNewPlayer({
    team: "",
    goals: "",
    yellow_cards: "",
    shots: "",
  });
};

export const removePlayer = (team, players, setPlayers) => {
  const updatedList = players.filter((player) => player.team !== team);
  setPlayers(updatedList);
};

export const generateRandomTeams = (setPlayers) => {
  const teamNames = [
    "Barcelona",
    "Chelsea",
    "PSG",
    "Milan",
    "Juventus",
    "River",
  ];

  const randomTeams = [];
  for (let i = 0; i < 6; i++) {
    randomTeams.push({
      team: teamNames[i],
      goals: Math.floor(Math.random() * 10),
      yellow_cards: Math.floor(Math.random() * 5),
      shots: Math.floor(Math.random() * 20),
    });
  }
  setPlayers(randomTeams);
};
