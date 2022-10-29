import { useState, createContext } from "react";

export const MySearchContext=createContext()

export const ContextProvider =({children})=>{
    const [searchValue, setSearchValue] = useState('')
    return(
        <MySearchContext.Provider value={{searchValue,setSearchValue}}>
            {children}
        </MySearchContext.Provider>
    )
}