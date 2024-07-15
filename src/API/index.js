// src/API/index.js
export async function fetchProducts() {
    try {
        const response = await fetch('http://localhost:3000/api/products');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

export async function fetchSingleProduct(productId) {
    try {
        const response = await fetch(`http://localhost:3000/api/products/${productId}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching product:', error);
    }
}

export async function fetchOrders() {
    try {
        const response = await fetch('http://localhost:3000/api/orders');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching orders:', error);
    }
}

export async function addNewOrder(order) {
    try {
        const response = await fetch('http://localhost:3000/api/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(order),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error adding new order:', error);
    }
}

export async function registerUser({ username, password }) {
    try {
      const response = await fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Registration failed');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error registering user:', error);
      throw error;
    }
  }