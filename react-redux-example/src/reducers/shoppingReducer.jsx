import {
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_ALL_FROM_CART,
  REMOVE_ONE_FROM_CART,
} from "../types";

export const initialState = {
  products: [
    { id: 1, name: "Producto 1", price: 100 },
    { id: 2, name: "Producto 2", price: 200 },
    { id: 3, name: "Producto 3", price: 300 },
    { id: 4, name: "Producto 4", price: 400 },
    { id: 5, name: "Producto 5", price: 500 },
    { id: 6, name: "Producto 6", price: 600 },
  ],
  cart: [],
};

export function shoppingReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: { // El state.products es la lista de productos que estan en el objeto initialState
      // newItem va a almacenar el producto al que se le dio click
      let newItem = state.products.find( // Busca el id en la lista de los productos que ya existen y lo guarda en una variable.
        (product) => product.id === action.payload // Esto es para identificar cual producto es el que voy a agregar.
      );// product.id son los id de la lista inicial de productos y action.payload contiene el id del producto que se le dio click
      //console.log(newItem);
      //
      let itemInCart = state.cart.find((item) => item.id === newItem.id); //Recorre los item(productos) del carrito y devuelve el item que ya existia si coincide el id.

      return itemInCart // Retornamos el item que coincidio o no.
        ? { // Si coincidio el item, osea es true ejecutamos las siguientes instrucciones.
            ...state, // Hacemos una copia del estado.(o duplicamos el estado)
            cart: state.cart.map((item) => //Generamos un nuevo arreglo.
            //Cuando coincida el item del carrito con el nuevo item del producto que queremos agregar.
              item.id === newItem.id // newItem.id es el id del producto que se quiere agregar.
               // Si coincide haga una copia del ...item y acceda al item.quantity del producto y le suma uno.
              ? { ...item, quantity: item.quantity + 1 }
                : item // Caso contrario regresa el valor del item, aqui no va a caer nunca ya que esto se valido previamente.
            ),
          }
        : { // Caso contrario agrega el nuevo item(producto), porque es un producto nuevo por agregar al carrito.
            ...state, // Hacemos una copia del estado anterior.
            // En la propiedad cart, hacemos una copia de lo que tenia cart mas el nuevo elemento que es newItem,
            cart: [...state.cart, { ...newItem, quantity: 1 }], // quantity indica que es el primer item de nuestro carrito de compras.
          };     // ...state.cart con esto hacemos una copia del carrito de compras
    }
    case REMOVE_ONE_FROM_CART: {                               // En el payload el usuario esta mandando el id
      let itemToDelete = state.cart.find((item) => item.id === action.payload); // Busca el id a eliminar y lo almacena el la variable itemToDelete

      return itemToDelete.quantity > 1 // Si la propiedad quantity es mayor a uno, hacemos la logica para restar el elemento.
        ? {
            ...state, // Hacemos una copia del estado anterior.
            cart: state.cart.map((item) => // Generamos un nuevo arreglo com map y evaluamos si item.id === action.payload que es el id que nos manda la accion.
              item.id === action.payload // Si es verdadero
                ? { ...item, quantity: item.quantity - 1 } // Retornamos toda la info del item, pero modificando si propiedad quantity: item.quantity - 1, restandole uno.
                : item // Caso contrario devolvemos el item con la info que tenia.
            ),
          }
          //Si la propiedad quantity llega a 0 significa que ya no tenemos productos para eliminar entonces no tiene sentido seguir eliminando ya que sino vamos a tener en la propiedad valores negativos -1,-2 para eso se cre el ternario.
        : {
            ...state, // Hacemos una copia del estado anterior.
            // Filter filtra y nos permite eliminar elementos.
            cart: state.cart.filter((item) => item.id !== action.payload), // Siempre que item.id !== action.payload se van a ir guardando los nuevos datos en el arreglo, de esta forma filtramos y excluimos el item que corresponde al id de payload.
          };
    }
    case REMOVE_ALL_FROM_CART: {
      return {
        ...state, // Hacemos una copia del estado actual.
        cart: state.cart.filter((item) => item.id !== action.payload), // Siempre que item.id !== action.payload se van a ir guardando los nuevos datos en el arreglo, de esta forma filtramos y excluimos el item que corresponde al id de payload.
      };
    }
    case CLEAR_CART:
      return initialState; // Retornamos los valores iniciales que no tiene productos para limpiar el carrito.
    default:
      return state; // Es estado es el mismo estado inicial este no cambia en todo el proceso, solo se utiliza para poder agregar, o eliminar los productos de el objeto cart que muestra los productos que fueron agregados.
  }
}
