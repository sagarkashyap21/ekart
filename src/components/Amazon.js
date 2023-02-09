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
    </section>
    <Footer />
    </>
  )
}

export default Amazon