import Header from "./components/Header"
import NotFound from "./pages/NotFound"
import "./scss/app.scss"
import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Cart from "./pages/Cart"

function App() {
    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="*" element={<NotFound/>} />
                    </Routes>
            </div>
        </div>
    )
}

export default App
