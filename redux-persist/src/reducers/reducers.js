import { combineReducers } from 'redux';

export const initialState = {
  db: [],
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case READ_ALL_DATA: {
      //console.log(action.payload);
      return {
        ...state,// Haga una copia del estado
        db: action.payload.map((data) => data), //Mapeamos todos los elementos que vienen en el action.payload y los pasamos al nuevo arreglo db y este los muestra en pantalla.
      };

    }
    case NO_DATA:
      return initialState;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  todos: todosReducer,
});

export default rootReducer;
