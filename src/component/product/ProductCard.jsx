import React from 'react'

const ProductCard = ({ product }) => {
  return (
    <div className="bg-gray-100 rounded-2xl p-4">
      <img src={product.image} alt={product.name} />

      <h4 className="mt-2 font-medium">{product.name}</h4>
      <p className="text-sm text-gray-500">${product.price}</p>
    </div>
  );
};

export default ProductCard;