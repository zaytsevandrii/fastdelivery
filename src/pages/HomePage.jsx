import React, { useEffect, useState } from "react"
import Categories from "../components/Categories"
import FoodBlock from "../components/FoodBlock"
import Skeleton from "../components/FoodBlockSkeleton"
import Sort from "../components/Sort"

function HomePage() {
    const [items,setItems]=useState([])
    const [isLoading,setIsLoading] = useState(true)
  
    useEffect(()=>{
      fetch('https://635646e9a2d1844a9770bb9d.mockapi.io/items')
      .then(res=>res.json())
      .then(res=>{
        setItems(res)
        setIsLoading(false)
      })
      
    },[]
    )
    return (
        <>
            <div className="content__top">
                <Categories/>
                <Sort/>
            </div>
            <h2 className="content__title">All food</h2>
            <div className="content__items">
                {isLoading ? [...new Array(8)].map((_,i) => <Skeleton key={i}/>) : items.map((el, i) => <FoodBlock key={i} el={el} />)}
            </div>
        </>
    )
}

export default HomePage
