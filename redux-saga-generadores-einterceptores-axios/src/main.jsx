
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/rootReducer';
import rootSaga from './sagas/sagas'
import App from './App';

// Se crea una instancia de middleware llamada sagaMiddleware.
const sagaMiddleware = createSagaMiddleware();

// Se crea la store de Redux utilizando createStore y se aplica el middleware de Saga utilizando applyMiddleware.
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// Se ejecuta la saga raíz mediante sagaMiddleware.run(rootSaga),
// lo que inicia la observación de las acciones definidas en watchFetchData.
sagaMiddleware.run(rootSaga);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
