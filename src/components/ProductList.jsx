import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
function ProductList() {
  const [products,setProducts] = useState([]);
  const [searchTerm,setSearchTerm] = useState("");


  useEffect(()=>{
    fetch('https://fakestoreapi.com/products').then(res => res.json()).then(rel => setProducts(rel)).catch(err => console.error(err)); 

  },[])

  const filteredProducts = products.filter(product => product.title.toLowerCase().includes(searchTerm.toLowerCase()));
  
  return (
    <div>
      <input 
      type="text"
      name='searchTerm'
      placeholder='Search Products.....'
      value={searchTerm}
      onChange={(e)=> {setSearchTerm(e.target.value)}}
      style={{padding:10 ,width: '100%', marginBottom:20 }}
       />

      {filteredProducts.length === 0 ? ( <h1>No products Found</h1>): (

        <div style={{display:'flex' , flexWrap:'wrap' , gap:10}}>
          {filteredProducts.map(product => (<ProductCard product = {product} key = {product.id}/>))}
        </div>
      )}
    </div>
  )
}

export default ProductList