import axios from "axios";
import { BASE_URL } from "../utils/request";

export const sendGetGameModes = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/modes`, {
      auth: {
        username: "Bryan",
        password: "123",
      },
    });

    return response;
  } catch (error) {
    console.log(error);
  }
}