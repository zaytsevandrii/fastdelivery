useEffect(() => {
    if (window.location.search) {
        const params = qs.parse(window.location.search.substring(1))
        console.log(params)
        const sort = (sortList.find((obj) => obj.sortProperty === params.sortProperty))
        dispatch(setFilters({
            ...params,sort
        }))
    }
},[])
useEffect(() => {
    const queryString = qs.stringify({
        sortProperty: activeSort.sortProperty,
        categoryIndex,
        currentPage,
    })
    navigate(`?${queryString}`)
}, [categoryIndex, activeSort, currentPage, searchValue])