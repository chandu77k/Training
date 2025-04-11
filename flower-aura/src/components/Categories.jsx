import React from 'react';
import '../App.css';
import '../css/Category.css';
import flowers from '../assets/categories/bouquet.jpg'
import cake from '../assets/categories/cake.jpg'
import combo from '../assets/categories/combo.jpg'
import plant from '../assets/categories/plant.jpg'
import personalised from '../assets/categories/personalised.jpg'
import gift from '../assets/categories/gift.jpg'
const Categories = () => {
  return (
    <>
    <div className='category'>
    <div className='category-types'>
        <img src={flowers} alt="flowers" className='category-cards'/>
        <p className='category-text'>Flowers</p>
    </div>
    <div className='category-types'>
        <img src={cake} alt="cake" className='category-cards'/>
        <p className='category-text'>Cakes</p>
    </div>
    <div className='category-types'>
        <img src={combo} alt="combo" className='category-cards'/>
        <p className='category-text'>Combos</p>
    </div>
    <div className='category-types'>
        <img src={plant} alt="plant" className='category-cards'/>
        <p className='category-text'>Plants</p>
    </div>
    <div className='category-types'>
        <img src={personalised} alt="personalised" className='category-cards'/>
        <p className='category-text'>Personalised</p>
    </div>
    <div className='category-types'>
        <img src={gift} alt="gift" className='category-cards'/>
        <p className='category-text'>Gifts</p>
    </div>
    </div>
    </>
  );
};

export default Categories;
