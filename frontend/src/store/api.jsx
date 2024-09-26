import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/";


// http://127.0.0.1:8000/api/products/?categories=1%2C2&price_min=100&price_max=200

export  const getProducts = async () => {
    const response = await axios.get(`${API_URL}products/`);
    return response.data;
}

export  const getCategories = async () => {
    const response = await axios.get(`${API_URL}category/`);
    return response.data;
}


