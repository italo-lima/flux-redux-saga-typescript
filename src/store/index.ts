import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import rootReducer from "./modules/rootReducer";
import { ICartState } from "./modules/cart/types";
import rootSaga from "./modules/rooSagas";

export interface IState {
  cart: ICartState;
}

const configPersist = {
  key: "cart",
  storage,
  blacklist: ["failedStockCheck"],
};

const persistedReducer = persistReducer(configPersist, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
