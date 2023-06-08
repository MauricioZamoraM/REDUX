// Redux-Saga es una biblioteca para gestionar tareas asíncronas en aplicaciones Redux. Proporciona una forma ordenada y eficiente de 
// coordinar acciones asíncronas, como llamadas a API, en un entorno predecible y manejable.

import { put, takeLatest } from 'redux-saga/effects';
import { FETCH_DATA, fetchDataSuccess, fetchDataFailure } from '../actions/actions';
import axios from 'axios';

// Los interceptores de Axios son funciones que permiten interceptar y manipular las solicitudes HTTP,
// antes de que se envíen o las respuestas HTTP antes de que se devuelvan. 

// Los interceptores se utilizan para agregar lógica común a todas las solicitudes o respuestas en una aplicación, 
// lo que facilita la gestión centralizada de ciertos aspectos de la comunicación con el servidor.

//----------------------------------------------------------------------//
// Hay dos tipos de interceptores en Axios:

// Interceptor de solicitud (Request Interceptor):

// El interceptor de solicitud se ejecuta antes de que se envíe la solicitud al servidor.
// Puedes utilizar el interceptor de solicitud para modificar la configuración de la solicitud, como agregar encabezados personalizados, adjuntar tokens de autenticación, establecer valores predeterminados o realizar transformaciones en los datos antes de enviarlos.
// También puedes utilizar el interceptor de solicitud para realizar acciones comunes, como mostrar una barra de carga o realizar una lógica específica antes de cada solicitud.
// Interceptor de respuesta (Response Interceptor):

// El interceptor de respuesta se ejecuta después de recibir una respuesta del servidor, pero antes de que se devuelva al código que realizó la solicitud.
// Puedes utilizar el interceptor de respuesta para procesar la respuesta recibida, como realizar transformaciones en los datos de respuesta, manipular los encabezados de respuesta, manejar errores comunes o realizar acciones comunes después de cada respuesta, como ocultar una barra de carga.
//----------------------------------------------------------------------//

// Los interceptores de Axios son útiles en varios casos:
// Autenticación: Puedes utilizar un interceptor de solicitud para adjuntar un token de autenticación a todas las solicitudes salientes.
// Manejo de errores: Un interceptor de respuesta puede capturar errores de respuesta comunes y tomar medidas específicas en función del estado o el código de error.
// Configuración global: Puedes utilizar interceptores para agregar configuración global, como encabezados predeterminados o información adicional a todas las solicitudes.
// Transformación de datos: Los interceptores te permiten realizar transformaciones en los datos antes de que se devuelvan al código que realizó la solicitud, como el formateo de datos o el mapeo de respuestas a un formato específico.
// En resumen, los interceptores de Axios te brindan un mecanismo flexible para agregar lógica común antes de enviar solicitudes o después de recibir respuestas en tu aplicación, lo que te ayuda a simplificar y centralizar la gestión de ciertos aspectos de la comunicación con el servidor.

//----------------------------------------------------------------------//


// Se definen los interceptores utilizando el método interceptors.
// Se utiliza axios.interceptors.request.use para definir el interceptor de solicitud.
axios.interceptors.request.use(
  (config) => { // En la función de callback, se tiene acceso a la configuración de la solicitud que se va a enviar.
    // Modificar la configuración de la solicitud si es necesario
    return config;
  },
  (error) => {
    // Si ocurre algún error en el interceptor de solicitud, se utiliza Promise.reject para rechazar la solicitud y propagar el error.
    return Promise.reject(error);
  }
);

// Se utiliza axios.interceptors.response.use para definir el interceptor de respuesta.
axios.interceptors.response.use(
  (response) => { // En la función de callback, se tiene acceso a la respuesta recibida del servidor. Puedes procesar la respuesta si es necesario antes de que se devuelva.
    // Procesar la respuesta si es necesario
    return response;
  },
  (error) => {
    // Manejar errores de respuesta
    // Si ocurre algún error en el interceptor de respuesta, se utiliza Promise.reject para rechazar la respuesta y propagar el error.
    return Promise.reject(error);
  }
);


// Es la saga encargada de realizar la llamada a la api
function* fetchDataSaga() {
  // try {
  //   const response = yield fetch('https://jsonplaceholder.typicode.com/todos/'); // El primer yield evita que se almacene la data en response
  //   // Se pausa a ejecucion par obtener la información de la api.
  //   const data = yield response.json();
  //   // Cuando se llama a put, se crea y despacha una acción de Redux(dispatch) dentro del flujo de la saga. 
  //   // Esta acción puede ser interceptada por los reducers de Redux y provocar cambios en el estado de la aplicación.
  //   // En este caso le esta pasando la data que obtuvo con el field al detener la ejecucion cuando obtuvo la respuesta de la peticion.
  //   yield put(fetchDataSuccess(data));
  // } catch (error) {
  //   // En este caso se esta obteniendo el error y actualizando el estado global de este
  //   yield put(fetchDataFailure(error.message));
  // }

  try {
    // Axios automáticamente aplicará los interceptores definidos previamente a esta solicitud.
    const response = yield axios.get('https://jsonplaceholder.typicode.com/todos/');
    const data = response.data; // En el caso de éxito, se accede a los datos de la respuesta utilizando response.data
    yield put(fetchDataSuccess(data));
  } catch (error) { // En el caso de error, se utiliza catch para capturar el error y se despacha la acción fetchDataFailure con el mensaje de error.
    yield put(fetchDataFailure(error.message));
  }

}

// Funciona como un observador de acciones(Watcher) vigila o escucha cuando la accion FETCH_DATA sea disparada para ejecutar la saga
function* watchFetchData() {
  // Esta función te permite controlar qué acciones se manejan y cómo manejarlas, 
  // cuando usas takeLatest para una determinada acción, solo se procesará la última acción disparada 
  // y las anteriores se ignorarán automáticamente ya que solo necesitamos la informacion mas actualizada.
  yield takeLatest(FETCH_DATA, fetchDataSaga); // Recibe 2 parametros, el primero es la acción que va a escuchar FETCH_DATA y el segundo es la saga que se ejecutará cuando se disparen las actions.
  // la funcion generadora fetchDataSaga se va a ejecutar siempre que FETCH_DATA sea disparada dentro de la store.
}

// En la función rootSaga, se ejecuta la saga watchFetchData mediante yield. 
// Esto permite que la saga esté activa y escuchando las acciones durante toda la vida útil de la aplicación.
export default function* rootSaga() {
  yield watchFetchData();
}
