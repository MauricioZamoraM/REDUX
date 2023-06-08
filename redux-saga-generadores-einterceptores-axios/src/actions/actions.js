export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

// Se definen las acciones relacionadas con la recuperacion de datos

export const fetchData = () => ({ // Es un creador de acciones que devuelve un objeto con el tipo de accion FETCH_DATA.
  type: FETCH_DATA,
});

export const fetchDataSuccess = (data) => ({ // Es un creador de acciones que devuelve un objeto con el tipo de accion FETCH_DATA_SUCCESS.
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailure = (error) => ({ // Es un creador de acciones que devuelve un objeto con el tipo de accion FETCH_DATA_FAILURE.
  type: FETCH_DATA_FAILURE,
  payload: error,
});
