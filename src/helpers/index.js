const SECRET_KEY = import.meta.env.VITE_SECRET_KEY;
import CryptoJS from "crypto-js";

export function encryptData (data) {
    return CryptoJS.AES.encrypt(data, SECRET_KEY).toString();
  }
    
  export function decryptData (data) {
    return CryptoJS.AES.decrypt(data, SECRET_KEY).toString(CryptoJS.enc.Utf8);
  }

export function setLocalStorage(key, value) {
    const encryptItem = encryptData(JSON.stringify(value));
  localStorage.setItem(key, encryptItem);
}

export function getLocalStorage(key) {
  try {
    const encryptItem = localStorage.getItem(key);
    if (!encryptItem) return "";
    const data = decryptData(encryptItem);
    return JSON.parse(data);
  } catch (error) {
    console.error("Error getting data from localStorage:", error);
    return "";
  }
}

export function setUserInLocalStorage(user) {
  setLocalStorage("user", user);
}

export function getUserFromLocalStorage() {
  return getLocalStorage("user");
}

export function clearLocalStorage() {
  localStorage.clear();
}

export function isLogin() {
  const user = getUserFromLocalStorage();
  return user !== "";
}

export function getHeaderConfig (type = "application/json") {
  const user = getUserFromLocalStorage();
  if (!user) return {};
  const token = user.token;

  if(type === "multipart/form-data") {
    return {
      headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`
      }
    }
  }

  if(type === "application/json") {
    return {
      headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
      }
    }
  }
  
  return {};

}

export const formatCurrency = (number) => {
  if(!number) return 0;
  if(typeof +number !== 'number') return 0;
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });
  return formatter.format(number);
}

export function timeFormatter(value) {
  if (!value || value === '' || (typeof value !== 'string')) return "--";
  
  const match = value.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (!match) return "--";
  
  const [_, year, month, day] = match;
  return `${day}/${month}/${year}`;
}