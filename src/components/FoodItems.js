import React, { useState } from 'react'

import './FoodItems.css'
const FoodItems = (props) => {
  const { products, onAdd } = props;
  const [liked,setLiked]=useState(false)
  return (
    <div className="foodproducts">
      <div className="top">
      <button className='filter'>
        <img src="./filter.png" alt="filter" /> Filter</button>
      <div className='opt'>
      <label htmlFor="cat">Sorted by:</label>
      <select name="cat" >
        <option value="recommended">recommended</option>
        <option value="other">other</option>
      </select>
      </div>
      </div>
    <div className="food">
      
{
    products.map((item)=>{
 return( 
  <div className='fooditem' id={item.bgcolor} key={item.id} >
    <div className="header">
      <div className="rating">
      <img src="./star.png" alt="star" />
      <p>{item.rating}</p>
      </div> 
      <div className="liked">
        <button className='likebtn' onClick={() => {
          onAdd(item)
          setLiked(!liked)}}>
         < img src={liked?"./redheart.png":"./whiteheart.png"} alt="heart" /></button>
      </div>
   </div>
    <div className="image">

<img src={item.url  }alt="food" />
</div>
<div className="content">
  <div className="detail">
  <div className="name">
  <p>{item.name}</p>
  </div>
  <div className="weight"><button >{item.weight}g</button></div>
  </div>
  <div className="price">
  <b>${item.price}</b>
</div>
</div>

  </div>
 )
    })
}
    </div>
    </div>
  )
}

export default FoodItems