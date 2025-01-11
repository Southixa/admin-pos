const baseUrl = import.meta.env.VITE_API_BASE_URL;

export default class ApiPath {
    // User
    static userLogin = `${baseUrl}/user/login`;
    static userRegister = `${baseUrl}/user/register`;
    static userForgot = `${baseUrl}/user/forgot`;
    static getAllUsers = `${baseUrl}/user/selectAll`;
    static getOneUser = `${baseUrl}/user/selectOne/`;
    static updateUser = `${baseUrl}/user/update/`;
    static deleteUser = `${baseUrl}/user/delete/`;

    // Category
    static getAllCategories = `${baseUrl}/category/selectAll`;
    static getOneCategory = `${baseUrl}/category/selectOne/`;
    static insertCategory = `${baseUrl}/category/insert`;
    static updateCategory = `${baseUrl}/category/update/`;
    static deleteCategory = `${baseUrl}/category/delete/`;

    // Menu
    static getAllMenus = `${baseUrl}/menu/selectAll`;
    static getOneMenu = `${baseUrl}/menu/selectOne/`;
    static getMenusByCategory = `${baseUrl}/menu/selectBy/`;
    static searchMenus = `${baseUrl}/menu/search`;
    static insertMenu = `${baseUrl}/menu/insert`;
    static updateMenu = `${baseUrl}/menu/update/`;
    static deleteMenu = `${baseUrl}/menu/delete/`;

    // Sale
    static getAllSales = `${baseUrl}/sale/selectAll`;
    static getOneSale = `${baseUrl}/sale/selectOne/`;
    static getSalesByStatus = `${baseUrl}/sale/selectBy/`;
    static insertSale = `${baseUrl}/sale/insert`;
    static updateSale = `${baseUrl}/sale/update/`;
    static updateSaleStatus = `${baseUrl}/sale/updateStatus/`;
    static deleteSale = `${baseUrl}/sale/delete/`;

    // Sale Detail
    static getAllSaleDetails = `${baseUrl}/sale_detail/selectAll`;
    static getOneSaleDetail = `${baseUrl}/sale_detail/selectOne/`;
    static getSaleDetailsBySale = `${baseUrl}/sale_detail/selectBy/`;
    static insertSaleDetail = `${baseUrl}/sale_detail/insert`;
    static updateSaleDetail = `${baseUrl}/sale_detail/update/`;
    static deleteSaleDetail = `${baseUrl}/sale_detail/delete/`;
}