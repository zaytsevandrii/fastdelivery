import React, { useEffect, useState, useContext } from "react"
import Categories from "../components/Categories"
import FoodBlock from "../components/FoodBlock"
import Skeleton from "../components/FoodBlockSkeleton"
import Pagination from "../components/Pagination/Pagination"
import Sort from "../components/Sort"
import { MySearchContext } from "../components/Context"
import { useSelector} from 'react-redux'

function HomePage() {
    const categoryIndex = useSelector(state=>state.filerSlice.categoryId)
    const activeSort = useSelector(state=>state.filerSlice.sort)
    const { searchValue} = useContext(MySearchContext)
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
   /*  const [categoryIndex, setCategoryIndex] = useState(0) */
    /* const [activeSort, setActiveSort] = useState({ name: "Most popular", sortProperty: "rating" }) */
    const setActiveSort = ()=>{}
    window.scrollTo(0, 0)
    console.log(categoryIndex,activeSort)
    
    useEffect(() => {
        setIsLoading(true)
        fetch(
            `https://635646e9a2d1844a9770bb9d.mockapi.io/items?page=${currentPage}&${searchValue.length===0&&`limit=12&`}${
                categoryIndex > 0 ? `category=${categoryIndex}` : ""
            }&sortBy=${activeSort.sortProperty}&order=asc`
        )
            .then((res) => res.json())
            .then((res) => {
                setItems(res)
                setIsLoading(false)
            })
    }, [categoryIndex, activeSort, currentPage,searchValue])
    return (
        <div className="container">
            <div className="content__top">
                <Categories activeIndex={categoryIndex} />
                <Sort activeList={activeSort}  />
            </div>
            <h2 className="content__title">All food</h2>
            <div className="content__items">
                {isLoading
                    ? [...new Array(24)].map((_, i) => <Skeleton key={i} />)
                    : items
                          .filter((el) => el.title.toLowerCase().includes(searchValue.toLowerCase()))
                          .map((el, i) => <FoodBlock key={i} el={el} />)}
            </div>
            <Pagination onChangePage={(number) => setCurrentPage(number)} />
        </div>
    )
}

export default HomePage
