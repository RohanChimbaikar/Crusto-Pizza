import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';

import { createOrder } from '../../services/apiRestaurant';
import Button from '../../ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCart, getTotalCartPrice } from '../cart/cartSlice';
import EmptyCart from '../cart/EmptyCart';
import store from '../../store';
import { useEffect, useState } from 'react';
import { formatCurrency } from '../../utils/helpers';
import { fetchAddress } from '../user/userSlice';

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const cart = useSelector(getCart);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const formErrors = useActionData();
  const [addressInput, setAddressInput] = useState('');
  const {
    username,
    status: AddressStatus,
    position,
    address,
    error,
  } = useSelector((state) => state.user);

  useEffect(() => {
    if (address) setAddressInput(address);
  }, [address]);

  const totalCartPrice = useSelector(getTotalCartPrice);
  const priority = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priority;

  const isLoadingAddress = AddressStatus === 'loading';

  const dispatch = useDispatch();
  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">
        Ready to order? Let&apos;s go!
      </h2>

      <Form method="POST" className="max-w-2xl">
        {/* First Name */}
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:shrink-0 sm:basis-40">First Name</label>

          <input
            type="text"
            name="customer"
            className="input flex-1"
            defaultValue={username}
            required
          />
        </div>

        {/* Phone */}
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-start">
          <label className="sm:shrink-0 sm:basis-40 sm:pt-3">
            Phone number
          </label>

          <div className="flex-1">
            <input type="tel" name="phone" required className="input w-full" />

            {formErrors?.phone && (
              <p className="mt-2 text-sm font-medium text-red-600">
                {formErrors.phone}
              </p>
            )}
          </div>
        </div>

        {/* Address */}
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-start">
          <label className="sm:shrink-0 sm:basis-40 sm:pt-3">Address</label>
 
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                name="address"
                className="input w-full pr-32"
                required
                disabled={isLoadingAddress}
                value={
                  AddressStatus === 'loading'
                    ? 'Fetching Address....'
                    : addressInput
                }
                onChange={(e) => setAddressInput(e.target.value)}
              />
              {!position.latitude && !position.longitude && (
                <span className="absolute right-2 top-1/2 -translate-y-1/2">
                  <Button
                    type="small"
                    disabled={isLoadingAddress}
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(fetchAddress());
                    }}
                  >
                    Get Address
                  </Button>
                </span>
              )}
            </div>

            {AddressStatus === 'error' && (
              <p className="mt-2 text-sm font-medium text-red-600">{error}</p>
            )}
          </div>
          <input
            type="hidden"
            name="position"
            value={
              position.latitude && position.longitude
                ? `${position.latitude},${position.longitude}`
                : ''
            }
          />
        </div>
        {/* Priority */}
        <div className="mb-8 flex items-center gap-3">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
            className="h-5 w-5 accent-espresso focus:ring-2 focus:ring-bronze-hover focus:ring-offset-2"
          />

          <label htmlFor="priority" className="font-medium">
            Want to give your order priority?
          </label>
        </div>

        {/* Cart */}
        <input type="hidden" name="cart" value={JSON.stringify(cart)} />

        {/* Submit */}
        <Button disabled={isSubmitting} type="primary">
          {isSubmitting
            ? 'Placing the order...'
            : `Order now at ${formatCurrency(totalPrice)}`}
        </Button>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();

  const data = Object.fromEntries(formData);

  console.log(data);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === 'true',
  };

  const errors = {};

  if (!isValidPhone(order.phone)) {
    errors.phone = 'Please give us your correct phone number';
  }

  if (Object.keys(errors).length > 0) {
    return errors;
  }

  const newOrder = await createOrder(order);

  store.dispatch(clearCart());

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
