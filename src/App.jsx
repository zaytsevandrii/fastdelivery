import Header from "./components/Header"
import NotFound from "./pages/NotFound"
import "./scss/app.scss"
import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Cart from "./pages/Cart"
import { useState } from "react"

function App() {
    const [searchValue,setSearchValue] = useState('')
    return (
        <div className="wrapper">
            <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
            <div className="content">
                    <Routes>
                        <Route path="/fastdelivery" element={<HomePage searchValue={searchValue} setSearchValue={setSearchValue}/>} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="*" element={<NotFound/>} />
                    </Routes>
            </div>
        </div>
    )
}

export default App
