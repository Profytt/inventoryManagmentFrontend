// src/components/SingleProduct.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSingleProduct } from '../API';

function SingleProduct() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        async function getProduct() {
            const data = await fetchSingleProduct(id);
            setProduct(data);
        }
        getProduct();
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Stock: {product.stock}</p>
        </div>
    );
}

export default SingleProduct;
