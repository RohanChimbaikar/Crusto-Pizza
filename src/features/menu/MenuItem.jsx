/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import { addItem, getCurrentQuantity } from '../cart/cartSlice';
import DeleteItem from '../cart/DeleteItem';
import UpdateItem from '../cart/UpdateItem';
function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const newItem = {
      pizzaId: id,
      name: name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  };

  const currentQuantity = useSelector(getCurrentQuantity(id));
  const isInCart = currentQuantity > 0;

  return (
    <li className="flex gap-3 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`${soldOut ? 'opacity-80 grayscale' : ''} h-24`}
      />
      <div className="flex flex-grow flex-col pt-1">
        <p className="font-medium">{name}</p>
        <p className="text-sm font-light capitalize italic">
          {ingredients.join(', ')}
        </p>
        <div className="mt-auto flex justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="font-light text-stone-500">Sold out</p>
          )}

          {isInCart && (
            <div className='flex gap-2 md:gap-8'>
              <UpdateItem pizzaId={id} >{currentQuantity}</UpdateItem>
              <DeleteItem pizzaId={id} />
            </div>
          )}
          {!soldOut && !isInCart && (
            <Button type="small" onClick={handleAddToCart}>
              Add to Cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
