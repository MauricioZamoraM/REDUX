import { useDispatch, useSelector } from "react-redux";
import { reset, restar, restar5, sumar, sumar5 } from "../actions/contadorActions";
// INICIO => Dispatch => ActionsCreators => TypesActions(payload) => Reducers => newState => combineReducers => reducer => store => FIN
const Contador = () => {
  // useSelector accede al estado global por medio de los reducers combinados en el archivo index.jsx de la carpera reducers
  const state = useSelector((state) => state);
  // Ejecuta las acciones de la carpeta actions, es necesario importar las acciones del archivo correspondiente
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Contador Redux</h2>
      <nav>
        <button onClick={()=> dispatch(sumar5())}>+5</button>
        <button onClick={()=> dispatch(sumar())}>+1</button>
        <button onClick={()=> dispatch(reset())}>0</button>
        <button onClick={()=> dispatch(restar())}>-1</button>
        <button onClick={()=> dispatch(restar5())}>-5</button>
        <button>Hola</button>
      </nav>
      <h3>{state.contador}</h3>
    </div>
  );
}

export default Contador;

/**
 * 0) Tener un componente que requiera que se ejecuten acciones y estas necesiten tener un estado
 * 1) Crear el store de la aplicacion(store) en un archivo index.jsx y envolvemos el componente con su etiqueta Provider
 * 2) Creamos los tipos de acciones(types) que se requieren en el componente en un archivo index.jsx
 * 2) Creamos la funcion reductora en la carpeta(reducers) con el switch con todos los tipos de acciones y retornamos el estado
 * 3) Combinamos los reducers en la carpeta(reducers) en el archivo index.jsx
 * 6) Creamos las funciones o acciones(actions) para los tipos(types)
 * 7) Utilizamos el useDispatch, useSelector e importamos las acciones reductoras para ejecutarlas en el componente
 */