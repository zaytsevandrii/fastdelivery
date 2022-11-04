import { CartItem } from "../redux/slices/cartSlice"

export const getitemsFromLS = ()=>{
   const data = localStorage.getItem('basket')
   const items:CartItem[] = data?JSON.parse(data):[]
   const totalPrice = items.reduce((sum,obj)=>(sum+obj.price*obj.count),0).toFixed(2)

console.log(data)
    return {
        items,
        totalPrice,
    }
}