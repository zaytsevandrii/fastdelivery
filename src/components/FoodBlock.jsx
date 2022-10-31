import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addItem } from "../redux/slices/cartSlice"

function FoodBlock({foodItem}) {
    const [activeSize,setActiveSize]=useState(0)
    const res=true
    const dispath=useDispatch()
    const onClickAdd = ()=>{
       const item={
            id:foodItem.id,
            title:foodItem.title,
            price:foodItem.price,
            imageUrl:foodItem.imageUrl,
        }
       
        dispath(addItem({...item,size:foodItem.sizes&&foodItem.sizes[activeSize]}))
    }
    const checkCount=useSelector(state=>state.cart.items.find(obj=>obj.id===foodItem.id))
    const foodCount=checkCount?checkCount.count:0
    return (
        <div className="food_wrapper">
            <div className="food-block">
                <img
                    className="food-block__image"
                    src={foodItem.imageUrl}
                    alt="Food"
                />
                {foodItem.sizes?
                <h4 className="food-block__title">{foodItem.title}</h4>:
                <h4 className="food-block__title2">{foodItem.title}</h4>}
                 {foodItem.sizes?
                <div className="food-block__selector">
                   {/*  <ul>
                        {el.types.map((typeInd,i)=><li key={i} onClick={()=>setActiveType(i)} className={activeType===i?'active':''}>{typeNames[typeInd]}</li>)}
                    </ul> */}
                    <ul>
                       {foodItem.sizes.map((el,i)=><li key={i} onClick={()=>setActiveSize(i)} className={activeSize===i?'active':''} >{el} cm</li>)}
                    </ul>
                </div>
                :''}
                <div className="food-block__bottom">
                    <div className="food-block__price">{foodItem.price} £</div>
                    <div onClick={onClickAdd} className="button button--outline button--add">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                fill="white"
                            />
                        </svg>
                        <span>Add</span>
                        {foodCount>0&&<i>{foodCount}</i>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodBlock
