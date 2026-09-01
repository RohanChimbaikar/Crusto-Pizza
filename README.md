<div align="center">
<table align="center">
  <tr>
    <td valign="middle">
      <img src="./public/Logo.svg" alt="Crusto Logo" width="65" />
    </td>
    <td valign="middle">
      <h1 style="margin: 0;">Crusto</h1>
      <p style="margin: 0;"><strong>Love at First Bite.</strong></p>
    </td>
  </tr>
</table>
  <p>
    A modern pizza ordering web application built with
    <strong>React</strong>, <strong>Redux Toolkit</strong>,
    <strong>React Router</strong>, and <strong>Tailwind CSS</strong>.
    <br />
    Browse pizzas, manage your cart, place orders, detect your delivery
    address, choose priority delivery, and track your orders.
  </p>

</div>

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Redux%20Toolkit-764ABC?style=flat-square&logo=redux&logoColor=white" alt="Redux Toolkit" />
  <img src="https://img.shields.io/badge/React%20Router-CA4245?style=flat-square&logo=reactrouter&logoColor=white" alt="React Router" />
  <img src="https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white" alt="ESLint" />
  <img src="https://img.shields.io/badge/Deployed%20with-GitHub%20Pages-222222?style=flat-square&logo=github&logoColor=white" alt="GitHub Pages" />
</p>

<p align="center">
  <a href="https://rohanchimbaikar.github.io/Crusto-Pizza/"><strong>🚀 Live Demo</strong></a>
</p>

---

## 🎥 Demo

https://github.com/user-attachments/assets/49025f11-7e50-4865-8d32-8489439d085c

---

## 📖 Table of Contents

- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [What I Practiced](#-what-i-practiced)
- [Project Structure](#️-project-structure)
- [Application Flow](#-application-flow)
- [Cart Management](#-cart-management)
- [Order Pricing](#-order-pricing)
- [Address Detection](#-address-detection)
- [Routing](#-routing)
- [Responsive Design](#-responsive-design)
- [API](#-api)
- [Getting Started](#-getting-started)
- [Production Build](#-production-build)
- [Deployment](#-deployment)
- [Future Improvements](#-future-improvements)
- [Author](#-author)
- [Support](#-support)

---

## ✨ Features

|                                |                                                               |
| ------------------------------ | ------------------------------------------------------------- |
| 🍕 **Dynamic Pizza Menu**      | Browse available pizzas and their ingredients                 |
| 🛒 **Shopping Cart**           | Add and manage pizzas in your cart                            |
| ➕ **Quantity Controls**       | Increase or decrease pizza quantities                         |
| 🗑️ **Cart Management**         | Remove individual items or clear the cart                     |
| 💰 **Automatic Pricing**       | Dynamically calculate item, cart, and order totals            |
| ⚡ **Priority Delivery**       | Add optional priority delivery                                |
| 📍 **Address Detection**       | Detect the user's delivery location using browser geolocation |
| 📦 **Order Placement**         | Create and submit pizza orders                                |
| 🔎 **Order Search**            | Search for existing orders using an order number              |
| 📋 **Order Tracking**          | View order details and order status                           |
| 🚦 **Loading States**          | Provide feedback during asynchronous operations               |
| ⚠️ **Error Handling**          | Display useful error states when requests fail                |
| 📱 **Responsive UI**           | Designed for different screen sizes                           |
| 🧭 **Client-side Routing**     | Navigation powered by React Router                            |
| 🗃️ **Global State Management** | Application state managed with Redux Toolkit                  |
| 📡 **Async Operations**        | API operations handled with Redux thunks                      |

---

## 🛠️ Tech Stack

| Technology            | Purpose                                  |
| --------------------- | ---------------------------------------- |
| ⚛️ **React**          | Building the user interface              |
| 🔄 **Redux Toolkit**  | Global state management                  |
| 🧭 **React Router**   | Routing and route-based data operations  |
| 🎨 **Tailwind CSS**   | Styling and responsive design            |
| ⚡ **Vite**           | Development server and production builds |
| 🟨 **JavaScript**     | Application logic                        |
| 🔌 **REST API**       | Restaurant data and order operations     |
| 🔍 **ESLint**         | Code quality and linting                 |
| 🌐 **GitHub Pages**   | Production hosting                       |
| 🤖 **GitHub Actions** | Automated deployment                     |

---

## 🧠 What I Practiced

This project was built to strengthen my understanding of modern React development patterns.

<details>
<summary><strong>⚛️ React</strong></summary>

- Component-based architecture
- Reusable UI components
- Props and component composition
- React hooks
- Controlled and uncontrolled inputs
- Conditional rendering
- Component state
- Form handling

</details>

<details>
<summary><strong>🗃️ Redux Toolkit</strong></summary>

- Redux store configuration
- Redux slices
- Actions and reducers
- Selectors
- Global state management
- Async thunks
- Derived state

</details>

<details>
<summary><strong>🧭 React Router</strong></summary>

- Nested routes
- Dynamic routes
- Route loaders
- Route actions
- `useFetcher`
- `fetcher.Form`
- Client-side navigation
- Route-level error handling

</details>

<details>
<summary><strong>🎨 Tailwind CSS</strong></summary>

- Utility-first CSS
- Responsive layouts
- Responsive breakpoints
- Custom colors
- Interactive states
- Reusable styling patterns
- Flexbox layouts

</details>

<details>
<summary><strong>🌐 API Integration</strong></summary>

- Fetching remote data
- Creating orders
- Updating orders
- Retrieving order details
- Handling asynchronous requests
- Loading states
- Error states

</details>

---

## 🏗️ Project Structure

```text
src/
├── features/
│   ├── cart/
│   │   ├── Cart.jsx
│   │   ├── CartItem.jsx
│   │   ├── CartSlice.jsx
│   │   └── ...
│   ├── menu/
│   │   ├── Menu.jsx
│   │   ├── MenuItem.jsx
│   │   └── ...
│   ├── order/
│   │   ├── CreateOrder.jsx
│   │   ├── Order.jsx
│   │   ├── OrderItem.jsx
│   │   ├── UpdateOrderPriority.jsx
│   │   └── ...
│   └── user/
│       ├── CreateUser.jsx
│       ├── UserSlice.jsx
│       └── ...
├── services/
│   └── apiRestaurant.js
├── ui/
│   ├── AppLayout.jsx
│   ├── Button.jsx
│   ├── Error.jsx
│   ├── Home.jsx
│   └── ...
├── utils/
│   └── helpers.js
├── App.jsx
├── main.jsx
└── store.js
```

---

## 🔄 Application Flow

```text
🏠 Home
   ↓
👤 Enter Name
   ↓
🍕 Browse Menu
   ↓
🛒 Add Pizza
   ↓
🛍️ Cart
   ↓
📝 Checkout
   ↓
📍 Delivery Address
   ↓
⚡ Priority Option
   ↓
📦 Place Order
   ↓
🔎 Track Order
```

---

## 🛒 Cart Management

The shopping cart is managed globally using **Redux Toolkit**.

Each cart item contains information such as:

```js
{
  (pizzaId, name, quantity, unitPrice, totalPrice);
}
```

The cart supports:

- ➕ Adding pizzas
- ➖ Decreasing quantities
- 🔼 Increasing quantities
- 🗑️ Removing items
- 🧹 Clearing the cart
- 💰 Calculating the total price
- 🔢 Calculating the total quantity

Selectors are used to derive total cart quantity, total cart price, and individual item quantities.

---

## 💳 Order Pricing

Crusto dynamically calculates the final order price.

Priority delivery adds **20% of the pizza subtotal**:

```js
const priority = withPriority ? totalCartPrice * 0.2 : 0;

const totalPrice = totalCartPrice + priority;
```

The checkout interface automatically updates the displayed total when priority delivery is selected.

---

## 📍 Address Detection

Crusto uses the browser's **Geolocation API** to determine the user's current coordinates.

These coordinates are then used to retrieve a corresponding delivery address.

The detected location is stored in Redux and used during checkout.

> 📌 Location access must be granted by the browser for this feature to work.

---

## 🧭 Routing

Application navigation and route-based data operations are handled by **React Router**.

| Route             | Purpose                       |
| ----------------- | ----------------------------- |
| `/`               | 🏠 Home                       |
| `/menu`           | 🍕 Pizza menu                 |
| `/cart`           | 🛒 Shopping cart              |
| `/order/new`      | 📝 Create a new order         |
| `/order/:orderId` | 📦 Order details and tracking |

React Router loaders and actions are used for data fetching and mutations associated with specific routes.

---

## 📱 Responsive Design

The interface is built with **Tailwind CSS** and adapts to different screen sizes.

Responsive styling is applied to:

- 📱 Mobile layouts
- 💻 Desktop layouts
- 🍕 Pizza menu items
- 🛒 Cart controls
- 📝 Forms
- 🔘 Buttons
- 🧭 Navigation

---

## 🌐 API

Crusto communicates with a restaurant REST API for:

- 🍕 Fetching pizzas
- 📦 Creating orders
- 🔎 Fetching existing orders
- ⚡ Updating order priority

The API must be available for the application's full functionality.

---

## 🚀 Getting Started

### 📋 Prerequisites

Make sure you have the following installed:

- **Node.js**
- **npm**
- **Git**

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/RohanChimbaikar/Crusto-Pizza.git
```

### 2️⃣ Navigate to the Project

```bash
cd Crusto-Pizza
```

### 3️⃣ Install Dependencies

```bash
npm install
```

### 4️⃣ Start the Development Server

```bash
npm run dev
```

Vite will provide a local development URL in the terminal.

---

## 📦 Production Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 🌍 Deployment

Crusto is deployed using **GitHub Pages**.

The project uses **GitHub Actions** to automatically build and deploy the application when changes are pushed to the `main` branch.

**🔗 Production Website:** [rohanchimbaikar.github.io/Crusto-Pizza](https://rohanchimbaikar.github.io/Crusto-Pizza/)

### 🤖 Deployment Workflow

```text
.github/
└── workflows/
    └── deploy.yml
```

Changes pushed to the `main` branch trigger the deployment workflow.

---

## 🔮 Future Improvements

- 🔐 User authentication
- 💾 Persistent cart storage
- 💳 Payment integration
- 📜 Order history
- 🧑‍💼 Restaurant administration dashboard
- 🔔 Toast notifications
- 📍 More advanced order tracking
- ♿ Improved accessibility
- 🧪 Automated testing
- 📱 Progressive Web App support

---

## 👨‍💻 Author

### Rohan Chimbaikar

🎓 B.Sc. Information Technology
💻 M.Sc. Information Technology

🔗 **GitHub:** [github.com/RohanChimbaikar](https://github.com/RohanChimbaikar)

---

## ⭐ Support

If you found **Crusto** interesting or useful, consider giving the repository a ⭐ on GitHub.

<p align="center">
  🍕 <strong>Crusto — Love at First Bite.</strong> 🍕
</p>
