import axios from "axios"
import ApiPath from "./api.path"
import { setUserInLocalStorage } from "../helpers"

export const LoginApi = async (username, password) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    }
    const data = {username, password}
    try {
        const response = await axios.post(ApiPath.userLogin, data, config)
        setUserInLocalStorage(response?.data?.data)
        console.log("Res in LoginApi => ", response?.data?.data);
        return response?.data?.data
    } catch (error) {
        console.log("Error Occurred In LoginApi => ", error);
        return undefined;
    }
}