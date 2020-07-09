import { combineReducers } from "redux"
import { userReducer } from "./user/user-reducer"
import { cartReducer } from "./cart/cart-reducer"
import { directoryReducer } from "./directory/directory-reducer"
import { shopReducer } from "./shop/shop-reducer"

import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cart"], // any reducer we want to store
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer,
})

// the reducer now has the persistant capability...
export default persistReducer(persistConfig, rootReducer)
