import React from "react"
import { setCategoryId } from "../redux/slices/filterSlice"
import { useDispatch } from 'react-redux'
import { AppDispatch } from "../redux/store"

type CategoriesProps={
    activeIndex:number
}
const categories=['All','Chinese','Kebab','Dishes','Desserts','Pizzas',]

const Categories:React.FC<CategoriesProps>=React.memo(({activeIndex})=>{
    const dispatch=useDispatch<AppDispatch>()
  
    const onChangeCategory =(i:number)=> {
        dispatch(setCategoryId(i))
    }


    return (
        <div className="categories">
            <ul>
             {
                categories.map((category,index)=>(
                    <li key={index} className={activeIndex===index?'active':''} onClick={()=>onChangeCategory(index)}>{category}</li>
                ))
             }
            </ul>
        </div>
    )
})

export default Categories
