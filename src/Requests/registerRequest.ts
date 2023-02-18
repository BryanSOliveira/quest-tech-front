import axios from "axios";
import { BASE_URL } from "../utils/request";

const sendPostRegister = async (name:string, email: string, username: string, password: string) => {
  if (name && email && username && password) {
    try {
      const response = await axios.post(`${BASE_URL}/register`, {
        name,
        email,
        username,
        password
      });

      return response;
    } catch (error) {
      console.log(error);
    }
  }
};

export default sendPostRegister;