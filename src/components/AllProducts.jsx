import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../API';
import { Link } from 'react-router-dom';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [quantity, setQuantity] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 25;

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    getProducts();
  }, []);

  const handleSelectProduct = (id) => {
    setSelectedProducts((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
    );
  };

  const handleQuantityChange = (id, value) => {
    setQuantity((prev) => ({ ...prev, [id]: value }));
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">All Products</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border">Select</th>
            <th className="py-2 px-4 border">ID</th>
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">Price</th>
            <th className="py-2 px-4 border">Stock</th>
            <th className="py-2 px-4 border">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {currentProducts.map((product) => (
            <tr key={product.id}>
              <td className="py-2 px-4 border">
                <input
                  type="checkbox"
                  checked={selectedProducts.includes(product.id)}
                  onChange={() => handleSelectProduct(product.id)}
                />
              </td>
              <td className="py-2 px-4 border">{product.id}</td>
              <td className="py-2 px-4 border">{product.name}</td>
              <td className="py-2 px-4 border">${product.price}</td>
              <td className="py-2 px-4 border">{product.stock}</td>
              <td className="py-2 px-4 border">
                <input
                  type="number"
                  value={quantity[product.id] || 1}
                  onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                  className="border rounded py-1 px-2"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        {Array.from({ length: Math.ceil(products.length / productsPerPage) }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => handlePageChange(i + 1)}
            className={`px-4 py-2 mx-1 ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
      {selectedProducts.length > 0 && (
        <Link to="/checkout">
          <button className="bg-green-500 text-white px-4 py-2 mt-4 rounded">
            Finalize Order
          </button>
        </Link>
      )}
    </div>
  );
};

export default AllProducts;
