import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotalCartPrice, getTotalCartQuantity } from './cartSlice';
import { formatCurrency } from '../../utils/helpers';

function CartOverview() {
  const numPizzas = useSelector(getTotalCartQuantity);
  const totalPrice = useSelector(getTotalCartPrice);

  if (!numPizzas) return null;

  return (
    <div className="flex h-16 w-full items-center justify-between bg-emerald-900 px-4 py-4 text-sm uppercase sm:px-6 md:text-lg">
      <p className="space-x-4 text-stone-200 sm:space-x-6">
        <span className="">{numPizzas} pizzas</span>
        <span> {formatCurrency(totalPrice)}</span>
      </p>
      <Link to="/cart" className="text-stone-300 active:text-white">
        Open cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;
