import { combineReducers } from 'redux';
import { FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from '../actions/actions';

// Se definen los reducers y se combinan utilizando combineReducers.

// Maneja el estado de los datos. Cuando se recibe la acción.
const dataReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS: //Actualiza el estado con la carga útil de la acción
      return action.payload;
    default:
      return state;
  }
};
// Maneja el estado de carga. Cuando se recibe la acción.
const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS: //Actualiza el estado a false.
      return false;
    case FETCH_DATA_FAILURE: //Actualiza el estado a false.
      return false;
    default:
      return state;
  }
};

// Maneja el estado de error. Cuando se recibe la acción.
const errorReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_DATA_FAILURE: // Actualiza el estado con la carga útil de la acción. Cuando se recibe la acción
      return action.payload;
    case FETCH_DATA_SUCCESS: // Restablece el estado a null.
      return null;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  data: dataReducer,
  loading: loadingReducer,
  error: errorReducer,
});

export default rootReducer;
