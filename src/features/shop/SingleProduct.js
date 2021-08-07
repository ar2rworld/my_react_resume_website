import { useSelector } from 'react-redux'
import React, { useEffect } from 'react'
import $ from 'jquery'
import { selectProductById } from './productsSlice'

export const SingleProduct = ({ match }) => {
  const { id } = match
  const product = useSelector(state => selectProductById(state, id))

  const addEffect=()=>{
    $('.Product').mouseenter((obj)=>{
      obj.currentTarget.childNodes.forEach(c=>{if(c.className==="redBColor"){
        $(c).animate({opacity:1}, 100);
      }})
    })
    $('.Product').mouseleave((obj)=>{
      obj.currentTarget.childNodes.forEach(c=>{if(c.className==="redBColor"){
        $(c).animate({opacity:0.6}, 100)
      }})
    })
  }
  useEffect(()=>{
    addEffect()
  })

  return(
    <div className="Product" style={{padding:"10px", border:"2px red solid", width:"auto", margin:"5px"}}>
      <div className="redBColor" style={{width:"100%", height:"100%", opacity:"0.5"}}></div>
      <img src={product.url} style={{display:"block",margin:"auto", width:product.width, height:product.height}} alt={product.alt}/>
      <h4>{product.name}</h4>
      <h5>{product.description}</h5>
      <h4 className="yellow" style={{fontStyle:"italic", textAlign:"right"}}>₽{product.price!=="0"?product.price:"Free for comrads"}</h4>
    </div>
  )
}