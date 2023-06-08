import { createStore } from "redux";
import reducer from "../reducers";
// CREAMOS EL STORE DE REDUX
const store = createStore(reducer); // Por parametro le pasamos la funcion que combina todos los reducers.
// Es el manejador de eventos que va a estar escuchando cualquier cambio en el estado.
store.subscribe(() => console.log(store)); //Cada vez que se actualize el estado lo mandamos a la consola.

export default store;
