import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0
}
// Un "slice" es una porción del estado de la aplicación que contiene los reducers (reductores) correspondientes y las acciones asociadas.
export const counterSlice = createSlice({
  name: 'counterSlice',
  initialState,
  reducers: {
    //Propiedad para actualizar el contador
    setCounter: (state, action) => {
      state.counter = action.payload.counter;
    }
  }
})

export const {setCounter} = counterSlice.actions;
// En un concepto de redux que nos permite obtener el estado global de counter
// Propiedad para obtener el valor del contador
export const selectCounter = (state) => state.counterState.counter;
export default counterSlice.reducer;