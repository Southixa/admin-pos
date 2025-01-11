import axios from "axios"
import ApiPath from "./api.path"

export const LoginApi = async (username, password) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    }
    const data = {username, password}
    try {
        const response = await axios.post(ApiPath.userLogin, data, config)
        console.log("Res in LoginApi => ", response?.data);
        return response?.data
    } catch (error) {
        console.log("Error Occurred In LoginApi => ", error);
        return undefined;
    }
}