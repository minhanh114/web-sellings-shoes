import { createStore ,combineReducers, applyMiddleware} from "redux";
import { authReducer } from "./reducers/userReducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'


const reducer = combineReducers({
    auth: authReducer
})

let initialState = {
    cart: {
        cartItems: localStorage.getItem('cartItems')
            ? JSON.parse(localStorage.getItem('cartItems'))
            : [],
        shippingInfo: localStorage.getItem('shippingInfo')
            ? JSON.parse(localStorage.getItem('shippingInfo'))
            : {}
    }
}

const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;