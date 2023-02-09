import React from 'react';
import '../styles/cards.css'

const Cards = ({item, handleClick}) => {
    const {title, text, price, img} = item;
  return (
    <div className="cards " data-aos="fade-up  " >
        <div className="image_box" >
            <img src={img} alt="Image" data-aos="flip-left" />
        </div>
        <div className="details" data-aos="fade-left"  data-aos-delay="100" >
            <p  style={{color:"black",fontSize:"20px"}} >{title}</p>
            <p>{text}</p>
            <p >Price - {price}Rs</p>
            <button onClick={()=>handleClick(item)} >Add to Cart</button>
        </div>
    </div>
  )
}

export default Cards