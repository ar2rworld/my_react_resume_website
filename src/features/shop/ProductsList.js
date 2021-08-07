import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// omit other imports
import { selectAllProducts, fetchProducts } from './productsSlice'
import { SingleProduct } from './SingleProduct'
 
export const ProductsList = () => {
  const dispatch = useDispatch()
  const products = useSelector(selectAllProducts)
  const productStatus = useSelector(state => state.products.status)
  const error = useSelector(state => state.products.error)

  useEffect(() => {
    if (productStatus === 'idle') {
      dispatch(fetchProducts())
    }
  }, [productStatus, dispatch])

  let content
  if (productStatus === 'loading') {    
    content = <div className="loader">Loading...</div>  
  } else if (productStatus === 'succeeded') {    
    // Sort products in reverse chronological order by datetime string    
    const orderedProducts = products      
    .slice()      
    .sort((a, b) => b.id < a.id)
    content = orderedProducts.map(product => (      
      <SingleProduct match={product}  />    
    ))  
  } else if (productStatus === 'failed') {    
    content = <div>{error}</div>  
  }

  return(
    <div style={{border:"1px rgba(255,215,0,120) solid"}}>
    <h3 style={{textAlign:"center"}}>Shop:</h3>
    <div style={{display:"grid", gridTemplateColumns:" auto auto auto"}}>
      {content}
      {/**
       * products?products.map(product=>{
        return(<SingleProduct match={product}  />)
        //name={product.name} price={product.price} description={product.description} url={product.url}
      }): <h2>Loading</h2>
       */}
    </div>
    </div>
  )
}