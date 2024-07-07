// src/services/api.js
import axios from "axios";

const API_URL = "https://api-scores.vercel.app/api";

export const getScores = async (players) => {
  try {
    const response = await axios.post(
      `${API_URL}/score`,
      { teams: players },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching scores:", error.message);
    throw error;
  }
};
