import axios from "axios";
import { LOGIN, REGISTER } from "../config"

export const getAccount = async (nameUser: string, emailUser: string, passwordUser: string) => {
    const response = await axios.post(REGISTER, {
        name: nameUser,
        email: emailUser,
        password: passwordUser,
        password_confirm: passwordUser,
    })
    return response
}

export const getToken = async (emailUser: string, passwordUser: string) => {
    const response = await axios.post(LOGIN, {
        email: emailUser,
        password: passwordUser,
    })
    return response.data.access_token
}