import axios from "axios";
import { getHeaderConfig } from "../helpers";
import ApiPath from "./api.path";

export const AddSaleApi = async (paymentType, addressType, priceTotal) => {
    const formData = new FormData();
    formData.append('paymentType', paymentType);
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

export const GetAllSalesApi = async () => {
    try {
        const response = await axios.get(ApiPath.getAllSales, getHeaderConfig())
        console.log("Res in GetAllSalesApi => ", response?.data?.data);
        return response?.data?.data;
    } catch (error) {
        console.log("Error Occurred In GetAllSalesApi => ", error);
        return undefined;
    }
}

export const GetOneSaleApi = async (id) => {
    try {
        const response = await axios.get(`${ApiPath.getOneSale}${id}`, getHeaderConfig())
        console.log("Res in GetOneSaleApi => ", response?.data?.data);
        return response?.data?.data;
    } catch (error) {
        console.log("Error Occurred In GetOneSaleApi => ", error);
        return undefined;
    }
}