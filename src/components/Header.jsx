import { useContext } from 'react';

import logoImg from '../assets/logo.jpg';
import Button from './UI/Button.jsx';
import CartContext from '../store/CartContext.jsx';
import UserProgressContext from '../store/UserProgressContext.jsx';

export default function Header() {
  const cartCtx = useContext(CartContext);
  const UserProgressCtx = useContext(UserProgressContext);

  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  function handleShowCart() {
    UserProgressCtx.showCart();
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A restuarent" />
        <h1>Food App</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}>
          Cart ({totalCartItems})
        </Button>
      </nav>
    </header>
  );
}
