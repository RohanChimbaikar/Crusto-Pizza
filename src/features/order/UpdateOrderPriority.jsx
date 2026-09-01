import React from 'react';
import Button from '../../ui/Button';
import { useFetcher } from 'react-router-dom';
import { updateOrder } from '../../services/apiRestaurant';

const UpdateOrderPriority = () => {
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="PATCH">
      <Button type="primary">Make Priority</Button>
    </fetcher.Form>
  );
};

export default UpdateOrderPriority;

export async function action({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
