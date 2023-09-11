// api/products.js
import axios from "axios";
const urlApi = `${import.meta.env.VITE_URL_API}`;

//อ่านค่า API 
export const readProducts = async () => {
  try {
    const response = await axios.get(`${urlApi}/products`);
    return response.data; // Return the data directly
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error; // Rethrow the error to handle it in the component
  }
};
//แก้ไข API 
export const editProducts = async () => {
  try {
    const response = await axios.get(`${urlApi}/products`);
    return response.data; // Return the data directly
  } catch (error) {
    console.error("Error editing products:", error);
    throw error; // Rethrow the error to handle it in the component
  }
};




