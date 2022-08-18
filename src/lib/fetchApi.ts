import axios from "axios";
import { LOGIN } from "../config"

export const getToken = async () => {
    const response = await axios.get(LOGIN)
    return response.data
}
