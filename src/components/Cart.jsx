import { useContext } from 'react';

import CartContext from '../store/CartContext.jsx';
import Modal from './UI/Modal.jsx';
import { currencyFormatter } from '../util/formatting';
import UserProgressContext from '../store/UserProgressContext.jsx';

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleHideCart() {
    userProgressCtx.hideCart();
  }

  return (
    <Modal cssClass="cart" open={userProgressCtx.progress === 'cart'}>
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <button textOnly onClick={handleHideCart}>
          Close
        </button>
        <button onClick={handleHideCart}>Go to Checkout</button>
      </p>
    </Modal>
  );
}
