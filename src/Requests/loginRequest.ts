import axios from "axios";
import { BASE_URL } from "../utils/request";

const sendPostLogin = async (username: string, password: string) => {
  if (username && password) {
    try {
      const response = await axios.post(`${BASE_URL}/login`, {
        username,
        password
      });

      return response;
    } catch (error) {
      console.log(error);
    }
  }
};

export default sendPostLogin;