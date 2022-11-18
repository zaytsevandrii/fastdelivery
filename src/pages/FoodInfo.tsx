import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import SkeletoneFood from '../components/SkeletoneFood'

const FoodInfo:React.FC = ()=>{
    const [item,setItem] = useState<{
        imageUrl:string;
        title:string;
        price:number;
    }>()
    const {id} = useParams()
    useEffect(() => {
        axios
            .get(
                `https://635646e9a2d1844a9770bb9d.mockapi.io/items/${id}`
            )
            .then((response) => {
                setItem(response.data)
            })
            .catch((error) =>console.error(error))
    }, [id])
if(!item){
    return <SkeletoneFood className='container'/>
}
  return (
    <div className='container'>
        <div className="content__itemId">
        <img src={item.imageUrl} alt="" />
        <h2>{item.title}</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed veritatis eligendi autem voluptate ad odio laudantium aliquid, iste id aut doloribus, neque omnis perspiciatis quia.</p>
        <h4>Price: {item.price} £</h4>
        </div>
    </div>
  )
}

export default FoodInfo