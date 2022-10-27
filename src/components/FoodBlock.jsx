import React, { useState } from "react"

function FoodBlock({el}) {
    const [foodCount,setFoodCount]=useState(0)
    const [activeType,setActiveType]=useState(0)
    const [activeSize,setActiveSize]=useState(0)
    const typeNames = ['тонкое','традиционное']
    const onClickAdd = ()=>{
        setFoodCount((prev)=>prev+1)
    }
    return (
        <div className="food_wrapper">
            <div className="food-block">
                <img
                    className="food-block__image"
                    src={el.imageUrl}
                    alt="Food"
                />
                {el.sizes?
                <h4 className="food-block__title">{el.title}</h4>:
                <h4 className="food-block__title2">{el.title}</h4>}
                 {el.sizes?
                <div className="food-block__selector">
                   {/*  <ul>
                        {el.types.map((typeInd,i)=><li key={i} onClick={()=>setActiveType(i)} className={activeType===i?'active':''}>{typeNames[typeInd]}</li>)}
                    </ul> */}
                    <ul>
                       {el.sizes.map((el,i)=><li key={i} onClick={()=>setActiveSize(i)} className={activeSize===i?'active':''} >{el} cm</li>)}
                    </ul>
                </div>
                :''}
                <div className="food-block__bottom">
                    <div className="food-block__price">{el.price} £</div>
                    <div onClick={onClickAdd} className="button button--outline button--add">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                fill="white"
                            />
                        </svg>
                        <span>Add</span>
                        <i>{foodCount}</i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodBlock
