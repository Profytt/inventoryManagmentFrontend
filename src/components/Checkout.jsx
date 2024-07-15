import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Checkout = () => {
  const { cartItems = [], totalPrice } = useContext(CartContext);

  if (!cartItems.length) {
    return <div>Your cart is empty</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border">Product Name</th>
            <th className="py-2 px-4 border">Quantity</th>
            <th className="py-2 px-4 border">Total Price</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td className="py-2 px-4 border">{item.name}</td>
              <td className="py-2 px-4 border">{item.quantity}</td>
              <td className="py-2 px-4 border">${(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <h2 className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default Checkout;
