import axios from "axios";
import { getHeaderConfig } from "../helpers";
import ApiPath from "./api.path";

export const AddCategoryApi = async (name, icon) => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('icon', icon, "icon");
    try {
        const response = await axios.post(ApiPath.insertCategory, formData, getHeaderConfig("multipart/form-data"))
        console.log("Res in AddCategoryApi => ", response?.data);
        return response?.data
    } catch (error) {
        console.log("Error Occurred In AddCategoryApi => ", error);
        return undefined;
    }
}

export const GetAllCategoriesApi = async () => {
    try {
        const response = await axios.get(ApiPath.getAllCategories, getHeaderConfig())
        console.log("Res in GetAllCategoriesApi => ", response?.data?.data);
        return response?.data?.data;
    } catch (error) {
        console.log("Error Occurred In GetAllCategoriesApi => ", error);
        return undefined;
    }
}

export const DeleteCategoryApi = async (id) => {
    try {
        const response = await axios.delete(`${ApiPath.deleteCategory}${id}`, getHeaderConfig())
        console.log("Res in GetAllCategoriesApi => ", response);
        return response;
    } catch (error) {
        console.log("Error Occurred In DeleteCategoryApi => ", error);
        return undefined;
    }
}

export const GetOneCategoryApi = async (id) => {
    try {
        const response = await axios.get(`${ApiPath.getOneCategory}${id}`, getHeaderConfig())
        console.log("Res in GetOneCategoryApi => ", response?.data?.data);
        return response?.data?.data;
    } catch (error) {
        console.log("Error Occurred In GetOneCategoryApi => ", error);
        return undefined;
    }
}

export const UpdateCategoryApi = async (id, name, icon, oldImage) => {
    try {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('oldImage', oldImage);
        formData.append('icon', icon, "icon");
        const response = await axios.put(`${ApiPath.updateCategory}${id}`, formData, getHeaderConfig("multipart/form-data"))
        console.log("Res in UpdateCategoryApi => ", response?.data?.data);
        return response?.data?.data;
    } catch (error) {
        console.log("Error Occurred In UpdateCategoryApi => ", error);
        return undefined;
    }
}