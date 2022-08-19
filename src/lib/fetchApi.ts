import axios from "axios";
import { ADD_PLAN, ALL_PLAN, LOGIN, PROFILE, REGISTER } from "../config"

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

export const getAllPlan = async () => {
    const response = await axios.get(ALL_PLAN)
    return response.data
}

export const addPlan = async (locationPlan: string, datePlan: string, budgetPlan: string) => {
    const response = await axios.post(ADD_PLAN, {
        location: locationPlan,
        date: datePlan,
        total_budget: budgetPlan,
        user_id: 1,
    })
    return response.data
}

export const getUserProfile = async (token: string) => {
    const response = await axios.get(PROFILE, {
        headers: {
            Authorization: `Bearer ${token}`
        },
    })
    return response.data;
}