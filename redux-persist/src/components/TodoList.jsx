import React from 'react';
import { connect } from 'react-redux';

const TodoList = ({ userId, title, completed }) => {
  return (
    <div>
      <ul style={{listStyle:'none'}}>
        <li>{userId}</li>
        <li>{title}</li>
        <li>{completed}</li>
      </ul>
    </div>
  );
};

// mapStateToProps, se utiliza para conectar el componente al estado de redux y acceder al estado que requiere
// Luego esta funcion mapea el estado de redux a las props del componente App
const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};
// conect se utiliza para conectar un componente de React a la tienda de redux para poder acceder al estado.
// Crea un contenedor que envuelve al componente y le proporciona acceso rapido al estado
export default connect(mapStateToProps)(TodoList);
