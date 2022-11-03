import React from "react"
import { setCategoryId } from "../redux/slices/filterSlice"
import { useDispatch } from 'react-redux'


function Categories({activeIndex}) {
    const categories=['All','Chinese','Kebab','Dishes','Desserts','Pizzas',]
    const dispatch=useDispatch()

    return (
        <div className="categories">
            <ul>
             {
                categories.map((category,index)=>(
                    <li key={index} className={activeIndex===index?'active':''} onClick={()=>dispatch(setCategoryId(index))}>{category}</li>
                ))
             }
            </ul>
        </div>
    )
}

export default Categories
