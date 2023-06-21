import { INCREMENT, DECREMENT, INCREMENT_5, DECREMENT_5, RESET } from "../types";
                     // Le podriamos pasar un patrametro entre los parentesis y usarla en el payload para no quemar el valor
export const sumar = () => ({type: INCREMENT});
export const restar = () => ({type: DECREMENT});
export const sumar5 = () => ({type: INCREMENT_5, payload: 5}); // payload es el valor que va a estar actualizando
export const restar5 = () => ({type: DECREMENT_5, payload: 5});
export const reset = () =>({type: RESET})