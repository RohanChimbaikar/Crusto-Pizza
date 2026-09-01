import React from 'react';
import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice';
/* eslint-disable react/prop-types */

const UpdateItem = ({ pizzaId, children }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-2 sm:gap-4">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <span className='text-sm font-medium'>{children}</span>
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
};

export default UpdateItem;
