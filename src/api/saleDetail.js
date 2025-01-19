import axios from "axios";
import { getHeaderConfig } from "../helpers";
import ApiPath from "./api.path";

export const AddSaleDetailApi = async (menuID, saleID, amount) => {
    const data = {
        menuID,
        saleID,
        amount
    }
    try {
        const response = await axios.post(ApiPath.insertSaleDetail, data, getHeaderConfig())
        console.log("Res in AddSaleDetailApi => ", response?.data);
        return response?.data
    } catch (error) {
        console.log("Error Occurred In AddSaleDetailApi => ", error);
        return undefined;
    }
}

export const GetAllSaleDetailsBySaleIdApi = async (saleID) => {
    try {
        const response = await axios.get(`${ApiPath.getAllSaleDetailsBySaleId}${saleID}`, getHeaderConfig())
        console.log("Res in GetAllSaleDetailsBySaleIdApi => ", response?.data?.data);
        return response?.data?.data;
    } catch (error) {
        console.log("Error Occurred In GetAllSaleDetailsBySaleIdApi => ", error);
        return undefined;
    }
}