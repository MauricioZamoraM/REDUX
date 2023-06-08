import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slices/counterSlice'
import storage from 'redux-persist/lib/storage';
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['counterState'] // Le pasamos los reducers que deseamos almacenar, no debemos guardar la informacion que viene del servidor y todo el tiempo se esta actualizando
}

const rootReducer = combineReducers({
  counterState: counterReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);



export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
})


