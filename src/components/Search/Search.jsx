import React, { useState } from "react"
import styles from "./Search.module.scss"
import { useRef } from "react"
import debounce from "lodash.debounce"
import { useCallback } from "react"
import {  useSelector,useDispatch } from "react-redux"
import { setSearchValues } from "../../redux/slices/filterSlice"
function Search() {
    const searchValue = useSelector (state=>state.filerSlice.searchValues)
    const dispatch = useDispatch()
    /* const { searchValue, setSearchValue } = useContext(MySearchContext) */
    const [value,setValue] = useState('')
    const inputRef = useRef()
    
    const onClickClear = () => {
        dispatch(setSearchValues(""))
        setValue("")
        inputRef.current.focus()
    }
    
    const updateSearchValue = useCallback(   //debounce
        debounce((str) => {
            dispatch(setSearchValues(str))
        }, 300),[])

    const onChangeInput = (e) => {
        setValue(e.target.value)
        updateSearchValue(e.target.value)
    }
    return (
        <div className={styles.root}>
            <svg className={styles.icon} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <title />
                <g id="search">
                    <path d="M29.71,28.29l-6.5-6.5-.07,0a12,12,0,1,0-1.39,1.39s0,.05,0,.07l6.5,6.5a1,1,0,0,0,1.42,0A1,1,0,0,0,29.71,28.29ZM14,24A10,10,0,1,1,24,14,10,10,0,0,1,14,24Z" />
                </g>
            </svg>
            <input
                ref={inputRef}
                className={styles.input}
                type="text"
                placeholder="Search..."
                value={value}
                onChange={onChangeInput}
            />
            {searchValue && (
                <svg
                    onClick={onClickClear}
                    className={styles.clearIcon}
                    data-name="Capa 1"
                    id="Capa_1"
                    viewBox="0 0 20 19.84"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M10.17,10l3.89-3.89a.37.37,0,1,0-.53-.53L9.64,9.43,5.75,5.54a.37.37,0,1,0-.53.53L9.11,10,5.22,13.85a.37.37,0,0,0,0,.53.34.34,0,0,0,.26.11.36.36,0,0,0,.27-.11l3.89-3.89,3.89,3.89a.34.34,0,0,0,.26.11.35.35,0,0,0,.27-.11.37.37,0,0,0,0-.53Z" />
                </svg>
            )}
        </div>
    )
}

export default Search
