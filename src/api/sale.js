import axios from "axios";
import { getHeaderConfig } from "../helpers";
import ApiPath from "./api.path";

export const AddSaleApi = async (paymnetType, addressType, priceTotal) => {
    const formData = new FormData();
    formData.append('paymnetType', paymnetType);
    formData.append('addressType', addressType);
    formData.append('priceTotal', priceTotal);
    try {
        const response = await axios.post(ApiPath.insertSale, formData, getHeaderConfig("multipart/form-data"))
        console.log("Res in AddSaleApi => ", response?.data);
        return response?.data
    } catch (error) {
        console.log("Error Occurred In AddSaleApi => ", error);
        return undefined;
    }
}