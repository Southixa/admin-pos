import axios from "axios";
import { getHeaderConfig } from "../helpers";
import ApiPath from "./api.path";

export const AddProductApi = async (name, price, categoryId, image) => {
    const formData = new FormData();
    formData.append('menuName', name);
    formData.append('price', price);
    formData.append('categoryID', categoryId);
    formData.append('image', image, "image");
    try {
        const response = await axios.post(ApiPath.insertMenu, formData, getHeaderConfig("multipart/form-data"))
        console.log("Res in AddProductApi => ", response?.data);
        return response?.data
    } catch (error) {
        console.log("Error Occurred In AddProductApi => ", error);
        return undefined;
    }
}

export const GetAllProductsApi = async () => {
    try {
        const response = await axios.get(ApiPath.getAllMenus, getHeaderConfig())
        console.log("Res in GetAllProductsApi => ", response?.data?.data);
        return response?.data?.data;
    } catch (error) {
        console.log("Error Occurred In GetAllProductsApi => ", error);
        return undefined;
    }
}

export const DeleteProductApi = async (id) => {
    try {
        const response = await axios.delete(`${ApiPath.deleteMenu}${id}`, getHeaderConfig())
        console.log("Res in DeleteProductApi => ", response);
        return response;
    } catch (error) {
        console.log("Error Occurred In DeleteProductApi => ", error);
        return undefined;
    }
}

export const GetOneProductApi = async (id) => {
    try {
        const response = await axios.get(`${ApiPath.getOneMenu}${id}`, getHeaderConfig())
        console.log("Res in GetOneProductApi => ", response?.data?.data);
        return response?.data?.data;
    } catch (error) {
        console.log("Error Occurred In GetOneProductApi => ", error);
        return undefined;
    }
}

export const UpdateProductApi = async (id, name, price, categoryId, image, oldImage) => {
    try {
        const formData = new FormData();
        formData.append('menuName', name);
        formData.append('price', price);
        formData.append('categoryID', categoryId);
        formData.append('oldImage', oldImage);
        formData.append('image', image, "image");
        const response = await axios.put(`${ApiPath.updateCategory}${id}`, formData, getHeaderConfig("multipart/form-data"))
        console.log("Res in UpdateProductApi => ", response?.data?.data);
        return response?.data?.data;
    } catch (error) {
        console.log("Error Occurred In UpdateProductApi => ", error);
        return undefined;
    }
}