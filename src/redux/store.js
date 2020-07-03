import { createStore, applyMiddleware } from "redux"

// allow browser to catch the store
import { persistStore } from "redux-persist"

import logger from "redux-logger"
import rootReducer from "./root-reducer"

const middlewares = [logger]

const store = createStore(rootReducer, applyMiddleware(...middlewares))
const persistor = persistStore(store)

export { store, persistor }
