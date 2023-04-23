import React from 'react'

const ProductCard = (props) => {
    const {image, title,price,discount,gender}=props;
  return (
    <div> 
        <img height={"500px"} width={"400px"}src={image}/>
        <p>{title}</p>
        <p>{price}</p>
    </div>
  )
}

export default ProductCard;
 
 