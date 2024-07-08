import { Alert } from "react-native";
import { getScores } from "../../services/api";

/**
 * Handles the change of values for a new player.
 * @param {string} key - The key of the field being changed.
 * @param {string} value - The new value of the field.
 * @param {function} setNewPlayer - Function to update the new player state.
 * @param {object} newPlayer - The object representing the new player.
 */
export const handleChange = (key, value, setNewPlayer, newPlayer) => {
  setNewPlayer({
    ...newPlayer,
    [key]: value,
  });
};

/**
 * Fetches the scores of players from the API and updates the state.
 * @param {array} players - The list of players.
 * @param {function} setScores - Function to update the scores state.
 * @param {function} setIsLoading - Function to update the loading state.
 */
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

/**
 * Generates scores by fetching them and then closes the modal.
 * @param {function} fetchScores - Function to fetch the scores.
 * @param {function} onClose - Function to close the modal.
 */
export const generateScores = async (fetchScores, onClose) => {
  await fetchScores();
  onClose();
};

/**
 * Resets the new player form.
 * @param {function} setNewPlayer - Function to update the new player state.
 */
export const resetNewPlayer = (setNewPlayer) => {
  setNewPlayer({
    team: "",
    goals: "",
    yellow_cards: "",
    shots: "",
  });
};

/**
 * Adds a new player to the list.
 * @param {object} newPlayer - The new player object.
 * @param {function} setPlayers - State function to update the players list.
 * @param {array} players - The list of players.
 * @param {function} setNewPlayer - Function to update the new player state.
 */
export const addPlayer = (newPlayer, setPlayers, players, setNewPlayer) => {
  const { team, goals, yellow_cards, shots } = newPlayer;

  // Check if any field is empty
  if (!team || !goals || !yellow_cards || !shots) {
    Alert.alert("Error", "All fields are required.");
    return;
  }

  // Check if the team already exists in the players list
  const teamExists = players.some((player) => player.team === team);
  if (teamExists) {
    Alert.alert("Error", "This team is already added.");
    return;
  }

  // Add the new player to the list
  setPlayers([...players, { ...newPlayer }]);
  resetNewPlayer(setNewPlayer);
};

/**
 * Removes a player from the list based on their team name.
 * @param {string} team - The team name of the player to be removed.
 * @param {array} players - The list of players.
 * @param {function} setPlayers - State function to update the players list.
 */
export const removePlayer = (team, players, setPlayers) => {
  const updatedList = players.filter((player) => player.team !== team);
  setPlayers(updatedList);
};

/**
 * Generates random teams with random statistics.
 * @param {function} setPlayers - State function to update the players list.
 */
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
