import axios from "axios"

export const GET_PRODUCTS_SUCCESS= "GET_PRODUCTS_SUCCESS";
export const VIEW_PRODUCT_SUCCESS= "VIEW_PRODUCT_SUCCESS";

const url = "https://fakestoreapi.com/products"
export const getProducts = ()=>{
    return async dispatch => {
        const response = await axios.get(url)
        dispatch({
            type: GET_PRODUCTS_SUCCESS,
            payload:response.data
        })
    }
}

export const viewProduct = (id) =>{
    return async dispatch=>{
        const response = await axios.get(`${url}/${id}`);
        dispatch({
            type:VIEW_PRODUCT_SUCCESS,
            payload:response.data
        })
    }
}