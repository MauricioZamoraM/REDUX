import './App.css'
import { useState, useEffect } from 'react';
import readAllAction from './actions/'
import TodoList from './components/TodoList';

// INICIO => Dispatch => ActionsCreators => TypesActions(payload) => Reducers => newState => combineReducers => reducer => store => FIN
function App() {
// Guardar esta informacion en un estado de redux y probar la persistencia de datos.
  const [data, setData] = useState(null);  
  const [loading, setLoading] = useState(true);

  // Función para hacer la petición fetch
  const fetchData = async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos/'); // Reemplaza la URL con tu endpoint de API
      const response = await res.json();
      // setData(response);
      dispatch(readAllAction(response));
      setLoading(false)
    } catch (error) {
      console.log('Error al realizar la petición:', error);
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Realizar peticion</button>
      {loading ? (
        <div className="container">
          <div class="custom-loader"></div>
        </div>
      ) : (
        data.map((el) => (
          <TodoList key={el.id} userId={el.userId} title={el.title} completed={el.completed} />
        ))
      )}

    </div >
  )

}
export default App;
