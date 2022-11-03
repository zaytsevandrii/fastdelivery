import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type CartItem={
    id:string,
    title:string,
    price:number,
    imageUrl:string,
    size:number,
    count:number,
}
interface CartSliceState{
    totalPrice:string|number,
    items:CartItem[],
    sort:{
        name:string,
        sortProperty:string
    }
}

const initialState:CartSliceState = {
    totalPrice: 0,
    items: [],
    sort: {
        name: "Most popular",
        sortProperty: "rating",
    },
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        /* addItem(state, action) {
            state.items.push(action.payload)
            state.totalPrice=(state.items.reduce((sum,obj)=>(sum+obj.price),0)).toFixed(2)
        }, */
        addItem(state, action) {
            const findItem = state.items.find(obj=>obj.id===action.payload.id)
            if (findItem){
                findItem.count+=1
            }else{
                state.items.push({
                    ...action.payload,
                    count:1
                })
            }
            state.totalPrice=state.items.reduce((sum,obj)=>(sum+obj.price*obj.count),0).toFixed(2)
        },
        incrementItem(state, action:PayloadAction<string>) {
            const findItem = state.items.find(obj=>obj.id===action.payload)
            if (findItem){
                findItem.count++
            }
            state.totalPrice=(state.items.reduce((sum,obj)=>(sum+obj.price*obj.count),0)).toFixed(2)

        },
        decrementItems(state, action:PayloadAction<string>) {
            const findItem = state.items.find(obj=>obj.id===action.payload)
            if (findItem&&findItem.count>1){
                findItem.count--
            }else{
                state.items=state.items.filter(el=>el.id!==action.payload)
            }
            state.totalPrice=(state.items.reduce((sum,obj)=>(sum+obj.price*obj.count),0)).toFixed(2)
        },
        removeItems(state, action:PayloadAction<string>) {
            state.items=state.items.filter(el=>el.id!==action.payload)
            state.totalPrice=(state.items.reduce((sum,obj)=>(sum+obj.price*obj.count),0)).toFixed(2)
        },
        clearItems(state) {
            state.items=[]
            state.totalPrice=0
        },
       
    },
})

// Action creators are generated for each case reducer function
export const {addItem,removeItems,clearItems, decrementItems} = cartSlice.actions

export default cartSlice.reducer
