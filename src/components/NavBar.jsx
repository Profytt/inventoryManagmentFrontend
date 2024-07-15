import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const NavBar = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <nav className="bg-blue-500 p-4 flex justify-between items-center">
      <Link to="/" className="text-white text-lg font-bold">Inventory App</Link>
      <div>
        {isAuthenticated ? (
          <>
            <Link to="/checkout" className="text-white mr-4">Checkout</Link>
            <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="text-white mr-4">Login</Link>
            <Link to="/register" className="text-white">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
