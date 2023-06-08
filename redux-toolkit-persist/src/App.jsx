import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import { selectCounter, setCounter } from './redux/slices/counterSlice';

function App() {
  const counter = useSelector(selectCounter);
  const dispatch = useDispatch();
  const addValue = () => {
    dispatch(
      setCounter({ counter: counter + 1 })
    )
  }
  const lessValue = () => {
    dispatch(
      setCounter({ counter: counter - 1 })
    )
  }
  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={addValue}>Sumar</button>
      <button onClick={lessValue}>Restar</button>
    </div>
  )
}

export default App
