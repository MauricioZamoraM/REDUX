import { combineReducers } from "redux";
import contadorReducer from "./contadorReducer";
import { crudReducer } from "./crudReducer";
import { shoppingReducer } from "./shoppingReducer";

//COMBINAMOS TODOS LOS REDUCERS
const reducer = combineReducers({
  contador: contadorReducer,
  shopping: shoppingReducer,
  crud: crudReducer,
});

export default reducer;
