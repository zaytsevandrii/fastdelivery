import React, { useEffect, useState } from "react"
import Categories from "../components/Categories"
import FoodBlock from "../components/FoodBlock"
import Skeleton from "../components/FoodBlockSkeleton"
import Pagination from "../components/Pagination/Pagination"
import Sort from "../components/Sort"

function HomePage({ searchValue }) {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [currentPage,setCurrentPage] = useState(1)
    const [categoryIndex, setCategoryIndex] = useState(0)
    const [activeSort, setActiveSort] = useState({ name: "Most popular", sortProperty: "rating" })
    window.scrollTo(0, 0)
    useEffect(() => {
        setIsLoading(true)
        fetch(
            `https://635646e9a2d1844a9770bb9d.mockapi.io/items?page=${currentPage}&limit=12&${categoryIndex > 0 ? `category=${categoryIndex}` : ""}&sortBy=${
                activeSort.sortProperty
            }&order=asc`
        )
            .then((res) => res.json())
            .then((res) => {
                setItems(res)
                setIsLoading(false)
            })
    }, [categoryIndex, activeSort,currentPage])
    return (
        <div className="container">
            <div className="content__top">
                <Categories activeIndex={categoryIndex} setActiveIndex={setCategoryIndex} />
                <Sort activeList={activeSort} setActiveList={setActiveSort} />
            </div>
            <h2 className="content__title">All food</h2>
            <div className="content__items">
                {isLoading
                    ? [...new Array(24)].map((_, i) => <Skeleton key={i} />)
                    : items
                          .filter((el) => el.title.toLowerCase().includes(searchValue.toLowerCase()))
                          .map((el, i) => <FoodBlock key={i} el={el} />)}
            </div>
            <Pagination onChangePage={number=>setCurrentPage(number)}/>
        </div>
    )
}

export default HomePage
