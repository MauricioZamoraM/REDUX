import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData } from './actions/actions';

const App = ({ fetchData, data, loading, error }) => {
  useEffect(() => {
    fetchData(); // Se llama a la funcion fetchData() cuando el componente se monta.
  }, [fetchData]);
  // Se verifica el estado de carga (loading). Si está en true, se muestra un mensaje de carga.
  if (loading) {
    return <div>Loading...</div>;
  }
  // Se verifica si hay un error (error). Si existe, se muestra un mensaje de error.
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
      // Si no hay errores ni carga, se muestra la lista de datos recibidos.
    <div>
      {data && data.map((item) => <div key={item.id}>{item.title}</div>)}
    </div>
  );
};
// mapStateToProps, se utiliza para conectar el componente al estado de redux y acceder al estado que requiere
// Luego esta funcion mapea el estado de redux a las props del componente App
const mapStateToProps = (state) => ({
  data: state.data,
  loading: state.loading,
  error: state.error,
});

// conect se utiliza para conectar un componente de React a la tienda de redux para poder acceder al estado.
// Crea un contenedor que envuelve al componente y le proporciona acceso rapido al estado
export default connect(mapStateToProps, { fetchData })(App);
