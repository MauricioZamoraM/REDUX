import {
  DECREMENT,
  DECREMENT_5,
  INCREMENT,
  INCREMENT_5,
  RESET,
} from "../types";

const initialState = 0;
//Esta es la funcion reductora.
export default function contadorReducer(state = initialState, action) { // Hay que inicializar el estado. 
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case INCREMENT_5:
      return state + action.payload;
    case DECREMENT_5:
      return state - action.payload;
    case RESET:
      return initialState;
    default:
      return state;
  }
}
