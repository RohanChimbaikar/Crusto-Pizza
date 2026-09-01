import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from './CartItem';
import EmptyCart from './EmptyCart';

import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCart } from './cartSlice';

/* eslint-disable react/prop-types */

function Cart() {
  const cart = useSelector(getCart);
  const username = useSelector((state) => state.user.username);
  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-3 py-2">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 font-inter font-semibold">Your cart, {username}</h2>
      <ul className="mb-4 divide-y divide-stone-200 border-b-2 border-stone-800">
        {cart.map((item) => {
          return <CartItem key={item.pizzaId} item={item} />;
        })}
      </ul>
      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="small">
          Order pizzas
        </Button>
        <Button type="secondary" onClick={() => dispatch(clearCart())}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
