import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import DeleteItem from './DeleteItem';
import UpdateItem from './UpdateItem';
import { getCurrentQuantity } from './cartSlice';

/* eslint-disable react/prop-types */
function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantity(pizzaId));
  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-semibold">{formatCurrency(totalPrice)}</p>
        <div className="flex justify-between gap-8">
          <UpdateItem pizzaId={pizzaId}>{currentQuantity}</UpdateItem>

          <DeleteItem pizzaId={pizzaId} />
        </div>
      </div>
    </li>
  );
}

export default CartItem;
