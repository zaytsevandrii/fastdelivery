import Header from "./components/Header"
import NotFound from "./pages/NotFound"
import "./scss/app.scss"
import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Cart from "./pages/Cart"
import { useSelector, useDispatch } from 'react-redux'
import { increment,decrement } from "./redux/slices/filterSlice"

function App() {
    const count = useSelector((state) => state.coun.count)
  const dispatch = useDispatch()
    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                    <Routes>
                        <Route path="/fastdelivery" element={<HomePage/>} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="*" element={<NotFound/>} />
                    </Routes>
            </div>
        </div>
    )
}

export default App
