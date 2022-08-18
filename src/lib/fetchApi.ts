import axios from "axios";
import { LOGIN } from "../config"


export const getToken = async (emailUser: string, passwordUser: string) => {
    const response = await axios.post(LOGIN, {
        email: emailUser,
        password: passwordUser,
    })
    return response.data.access_token
}