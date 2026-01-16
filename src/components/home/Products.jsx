import React from 'react'
import ProductCard from '../cards/ProductCard';
import { getProducts } from '@/actions/server/product';

const Products = async() => {
  const allProducts = (await getProducts()) || [];

  const displayProducts = allProducts.slice(15,30);

  return (
    <div className="py-12 bg-base-200">
      <div className="max-w-400 mx-auto">
        <h2 className='text-center font-bold text-gray-800 text-4xl mb-10'>
          আমাদের পণ্যসমূহ
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-6 gap-6'>
          {
            displayProducts.map(product => (
              <ProductCard key={product._id} product={product}></ProductCard>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Products;