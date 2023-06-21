import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    {/* Se encarga de mostrar un componente de carga (como un spinner) mientras los datos persistidos se cargan desde el almacenamiento. Una vez que los datos se cargan correctamente, el componente principal se renderiza con los datos disponibles en el store de Redux. */}
    <PersistGate loading={null} persistor={persistor}> {/*Envolvemos la aplicación con el PersistGate*/}
      <App />
    </PersistGate>
  </Provider>
)

/*
Ahora puedes utilizar Redux en tu aplicación como lo harías normalmente. Puedes definir tus acciones, reducers y componentes conectados como de costumbre. 
La diferencia principal es que los datos del estado se almacenan de forma persistente, lo que significa que los datos persistirán entre sesiones y se cargarán automáticamente al iniciar la aplicación.
*/
