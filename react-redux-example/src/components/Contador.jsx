import { useDispatch, useSelector } from "react-redux";
import {
  reset,
  restar,
  restar5,
  sumar,
  sumar5,
} from "../actions/contadorActions";
// En los componentes debemos usar e useSelector de redux para acceder al estado.
const Contador = () => {
  const state = useSelector((state) => state); // Permite acceder al estado de redux, es como el useState pero en redux.
  const dispatch = useDispatch(); //Permite a acceder a los dispatch.

  return (
    <div>
      <h2>Contador Redux</h2>
      <nav>
        {/* Utilizamos los dispatch para disparar las acciones */}
        <button onClick={() => dispatch(sumar5())}>+5</button> 
        <button onClick={() => dispatch(sumar())}>+1</button>
        <button onClick={() => dispatch(reset())}>0</button>
        <button onClick={() => dispatch(restar())}>-1</button>
        <button onClick={() => dispatch(restar5())}>-5</button>
      </nav>
      <h3>{state.contador}</h3>  
    </div>
  );
};

export default Contador;
