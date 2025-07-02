import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
function ProductList() {
  const [products,SetProducts] = useState([]);
  const [searchTerm , setSearchTerm] = useState("");

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products').then(res => res.json()).then(json => SetProducts(json)).catch((e) => console.error(e))
  },[]);
  const FilteredProducts = products.filter(product => product.title.toLowerCase().includes(searchTerm.toLowerCase()));


  return (
    <>
      <div>
        <input style={{ width: '93%' , fontWeight: 'bold' ,padding:10 ,height:30 ,marginBottom: 20, borderRadius:7}}
         type="text"
         name='search'
         placeholder='Search for Products....'
         value={searchTerm}
         onChange={(e)=> setSearchTerm(e.target.value)}
        />
      </div>
      <div style={{display: 'flex' , flexWrap: 'wrap' , gap:20 }}>
        {FilteredProducts.map(product => (<ProductCard key = {product.id} product = {product}/>))}
      </div>
    </>
  )
}

export default ProductList