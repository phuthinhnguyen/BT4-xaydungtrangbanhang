import { GET_PRODUCTS_SUCCESS, VIEW_PRODUCT_SUCCESS } from "./action"

const initialState  = {
  products: []
}
const rootReducer = (state = initialState , action) => {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      return { ...state,products:action.payload }
    case VIEW_PRODUCT_SUCCESS:
      return action.payload
  }
}
export default rootReducer;