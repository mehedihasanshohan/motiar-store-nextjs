import React from 'react'
import products from "@/data/products.json";
import ProductCard from '../cards/ProductCard';
import { getProducts } from '@/actions/server/product';


const Products = async() => {
  const products = (await getProducts()) || [];
  
  return (
    <div>
      <h2 className='text-center font-bold text-4xl mb-4'>Our Producst</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-6 gap-5'>
        {
          products.map(product => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))
        }
      </div>
    </div>
  )
}

export default Products