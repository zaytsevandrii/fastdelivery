import React, { useState } from "react"

function Categories({setActiveIndex,activeIndex}) {
    const categories=['All','Chinese','Kebab','Dishes','Desserts','Pizzas',]

   
    return (
        <div className="categories">
            <ul>
             {
                categories.map((category,index)=>(
                    <li key={index} className={activeIndex===index?'active':''} onClick={()=>setActiveIndex(index)}>{category}</li>
                ))
             }
            </ul>
        </div>
    )
}

export default Categories
