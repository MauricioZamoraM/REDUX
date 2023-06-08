import {
  DECREMENT,
  DECREMENT_5,
  INCREMENT,
  INCREMENT_5,
  RESET,
} from "../types";

// Exportamos los tipos de acciones que vamos a realizar
export const sumar = () => ({ type: INCREMENT });

export const restar = () => ({ type: DECREMENT });

export const sumar5 = () => ({ type: INCREMENT_5, payload: 5 }); //pasamos la accion y el valor que va a estar actualizando.

export const restar5 = () => ({ type: DECREMENT_5, payload: 5 });

export const reset = () => ({ type: RESET });
