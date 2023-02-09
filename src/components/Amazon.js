import React from 'react';
import list from '../data';
import '../styles/amazon.css';
import Cards from './Cards';
import Footer from './Footer';

const Amazon = ({handleClick}) => {
  return (
    <>
    <section>
        {
            list.map((item)=>(
                <Cards item={item} key={item.id} handleClick={handleClick} />
            ))
        }
        <img id="offer"  src="https://hellosubscription.com/wp-content/uploads/2017/01/7983-d-animation.gif?quality=90&strip=all" alt="" />
    </section>
    <Footer />
    </>
  )
}

export default Amazon