# 🍕 Crusto

A modern pizza ordering web application built with **React**, **Redux Toolkit**, **React Router**, and **Tailwind CSS**. Crusto lets users browse a pizza menu, manage their cart, place orders, detect their delivery address, and track order status.

## 🎥 Demo



https://github.com/user-attachments/assets/49025f11-7e50-4865-8d32-8489439d085c




## ✨ Features

- 🍕 Browse a dynamic pizza menu
- 🛒 Add pizzas to the cart
- ➕ Increase and decrease item quantities
- 🗑️ Remove items from the cart
- 💰 Automatic cart and order price calculations
- ⚡ Optional priority delivery
- 📍 Automatically detect the user's location and delivery address
- 📦 Place and track orders
- 🔎 Search orders by order number
- 📱 Responsive UI for different screen sizes
- 🚦 Loading and error states
- 🧭 Client-side routing with React Router
- 🗃️ Global state management with Redux Toolkit
- 📡 Asynchronous Redux operations using thunks

## 🛠️ Tech Stack

- **React**
- **Redux Toolkit**
- **React Redux**
- **React Router**
- **Tailwind CSS**
- **Vite**
- **JavaScript**
- **REST API**

## 🧠 What I Practiced

This project was built to practice modern React development patterns, including:

- React component architecture
- Reusable UI components
- Redux state management
- Redux Toolkit slices and reducers
- Async thunks
- React Router loaders and actions
- `useFetcher` for data fetching and mutations
- Form handling with React Router
- Controlled and uncontrolled form inputs
- Conditional rendering
- Responsive design with Tailwind CSS
- API integration
- Error and loading state handling

## 🏗️ Application Structure

```text
src/
├── features/
│   ├── cart/
│   │   ├── Cart.jsx
│   │   ├── CartItem.jsx
│   │   ├── CartSlice.jsx
│   │   └── ...
│   │
│   ├── menu/
│   │   ├── Menu.jsx
│   │   ├── MenuItem.jsx
│   │   └── ...
│   │
│   ├── order/
│   │   ├── CreateOrder.jsx
│   │   ├── Order.jsx
│   │   ├── OrderItem.jsx
│   │   └── ...
│   │
│   └── user/
│       ├── CreateUser.jsx
│       ├── UserSlice.jsx
│       └── ...
│
├── services/
│   └── apiRestaurant.js
│
├── ui/
│   ├── AppLayout.jsx
│   ├── Button.jsx
│   ├── Home.jsx
│   └── ...
│
├── utils/
│   └── helpers.js
│
├── App.jsx
├── main.jsx
└── store.js
```

## 🚀 Getting Started

### Prerequisites

Make sure you have **Node.js** and **npm** installed.

### Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/crusto.git
```

Navigate into the project:

```bash
cd crusto
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will be available at the local URL provided by Vite.

## 📦 Production Build

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 🔄 Application Flow

```text
Home
  ↓
Enter username
  ↓
Browse Menu
  ↓
Add Pizza
  ↓
Cart
  ↓
Checkout
  ↓
Get Delivery Address
  ↓
Choose Priority
  ↓
Place Order
  ↓
Order Tracking
```

## 📍 Address Detection

Crusto can use the browser's geolocation capabilities to determine the user's coordinates and retrieve a corresponding delivery address.

The detected position is stored in Redux and used during checkout.

## 🛒 Cart Management

The cart is managed globally using Redux Toolkit.

Each cart item contains information such as:

```js
{
  pizzaId,
  name,
  quantity,
  unitPrice,
  totalPrice
}
```

Redux reducers handle operations such as:

- Adding items
- Deleting items
- Increasing quantity
- Decreasing quantity
- Clearing the cart

Selectors are used to derive values such as the total cart quantity, total cart price, and current item quantity.

## 💳 Order Pricing

The checkout dynamically calculates the order total.

Priority delivery adds **20% of the pizza subtotal**:

```js
const priority = withPriority ? totalCartPrice * 0.2 : 0;

const totalPrice = totalCartPrice + priority;
```

The order button updates automatically to display the current total.

## 🧭 Routing

React Router is used for navigation and data operations.

Important routes include:

```text
/              → Home
/menu          → Pizza menu
/cart          → Shopping cart
/order/new     → Create order
/order/:id     → Order details
```

React Router loaders and actions are used for server communication associated with routes.

## 📱 Responsive Design

The interface is built with Tailwind CSS and uses responsive utilities to adapt layouts and controls across screen sizes.

For example, cart controls change their layout depending on the available screen width while maintaining accessible touch targets.

## ⚠️ API

Crusto communicates with a restaurant API for:

- Fetching pizzas
- Creating orders
- Fetching existing orders
- Updating orders

The application requires the API used by the project to be available for full functionality.

## 🔮 Possible Improvements

Some features that could be added in the future:

- User authentication
- Persistent cart storage
- Payment integration
- Order history
- Restaurant administration dashboard
- Toast notifications
- More advanced order tracking
- Improved accessibility
- Automated testing
- Progressive Web App support

## 👨‍💻 Author

**Rohan Chimbaikar**

- GitHub: [RohanChimbaikar](https://github.com/RohanChimbaikar)


---

⭐ If you found this project interesting, consider giving the repository a star.
