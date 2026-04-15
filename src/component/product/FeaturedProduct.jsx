import React from 'react'

const FeaturedProduct = ({ product }) => {
  return (
    <div className="bg-gray-100 rounded-3xl p-6 flex flex-col justify-between">
      <span className="text-xs text-gray-400">Featured</span>

      <img
        src={product.image}
        alt={product.name}
        className="w-full object-contain"
      />

      <div className="mt-4">
        <h3 className="font-medium">{product.name}</h3>
        <p className="text-sm text-gray-500">{product.description}</p>
        <p className="mt-2 font-semibold">${product.price}</p>
      </div>
    </div>
  );
};

export default FeaturedProduct;