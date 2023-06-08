import { useSelector, useDispatch } from "react-redux";
import { addToCart, clearCart, delFromCart } from "../actions/shoppingAction";
import CartItem from "./CartItem";
import ProductItem from "./ProductItem";

const ShoppingCart = () => {
  // useSelector accede al estado global por medio de los reducers combinados en el archivo index.jsx de la carpera reducers
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const { products, cart } = state.shopping; // Destructuramos los valores de estado de state.shopping.

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <h3>Productos</h3>
      <article className="box grid-responsive">
        {products.map((product) => (
          //Muestra la lista de los 6 productos
          <ProductItem
            key={product.id} // El product.id contiene el id de cada producto de la lista
            data={product}
            addToCart={() => dispatch(addToCart(product.id))}
          />
        ))}
      </article>
      <h3>Carrito</h3>
      <article className="box">
        <button onClick={() => dispatch(clearCart())}>Limpiar Carrito</button>
        {cart.map((item, index) => (
          <CartItem
            key={index}
            data={item}
            delOneFromCart={() => dispatch(delFromCart(item.id))}
            delAllFromCart={() => dispatch(delFromCart(item.id, true))}
          />
        ))}
      </article>
    </div>
  );
};

export default ShoppingCart;

