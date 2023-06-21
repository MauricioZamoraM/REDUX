import Contador from './Components/Contador'
import { Provider } from 'react-redux'
import store from './store'
function App() {

  return (
    <>
    <Provider store ={store}>
      <Contador/>
    </Provider>
    </>
  )
}

export default App
