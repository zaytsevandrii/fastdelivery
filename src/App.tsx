import React from "react"
import Header from "./components/Header"
import NotFound from "./pages/NotFound"
import "./scss/app.scss"
import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Cart from "./pages/Cart"
import SkeletoneFood from "./components/SkeletoneFood"

const FoodInfo = React.lazy(() => import("./pages/FoodInfo"))


function App() {
    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Routes>
                    <Route path="/fastdelivery" element={<HomePage />} />
                    <Route path="/cart" element={<Cart />} />

                    <Route
                        path="/foodinfo/:id"
                        element={
                            <React.Suspense fallback={<SkeletoneFood/>}>
                                <FoodInfo />
                            </React.Suspense>
                        }
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </div>
    )
}

export default App
