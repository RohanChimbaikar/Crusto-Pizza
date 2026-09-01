import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './ui/Home';
import Menu, { loader as menuLoader } from './features/menu/Menu';
import CreateOrder, {
  action as createOrderAction,
} from './features/order/CreateOrder';

import { action as UpdateOrder } from './features/order/UpdateOrderPriority';

import Order, { loader as orderLoader } from './features/order/Order';
import AppLayout from './ui/AppLayout';
import Cart from './features/cart/Cart';
import Error from './ui/Error';

const router = createBrowserRouter(
  [
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/menu',
          element: <Menu />,
          loader: menuLoader,
          errorElement: <Error />,
        },
        {
          path: '/order/new',
          element: <CreateOrder />,
          action: createOrderAction,
        },
        {
          path: '/order/:orderId',
          element: <Order />,
          loader: orderLoader,
          errorElement: <Error />,
          action: UpdateOrder,
        },
        {
          path: '/cart',
          element: <Cart />,
        },
      ],
    },
  ],
  {
    basename: import.meta.env.PROD ? '/Crusto-Pizza' : '/',
  },
);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
