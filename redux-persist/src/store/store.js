import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from '../reducers/reducers';

const persistConfig = {
  key: 'root',
  storage,
};
// Creamos una instancia de persistReducer y le pasamos dos parametros persistConfig y rootReducer.
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Creamos el store y le pasamos como parametro el persistedReducer
export const store = createStore(persistedReducer);
//El persistor es responsable de administrar el almacenamiento persistente y las acciones relacionadas, como cargar los datos almacenados cuando se inicia la aplicación.
export const persistor = persistStore(store);
