import { useEffect, useState } from 'react';
import Categories from './components/Categories';
import FoodBlock from './components/FoodBlock';
import Header from './components/Header';
import Sort from './components/Sort';
import './scss/app.scss'

function App() {
  const [items,setItems]=useState([])
  useEffect(()=>{
    fetch('https://635646e9a2d1844a9770bb9d.mockapi.io/items')
    .then(res=>res.json())
    .then(res=>setItems(res))
  },[])
  return (
      <div className="wrapper">
        <Header/>
      <div className="content">
        <div className="container">
          <div className="content__top">
        <Categories/>
            <Sort/>
          </div>
          <h2 className="content__title">All food</h2>
          <div className="content__items">
           {items.map((el,i)=><FoodBlock key={i} el={el}/>)}
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
