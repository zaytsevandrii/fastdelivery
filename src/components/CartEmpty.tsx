import React from "react"
import { Link } from "react-router-dom"
import emptyCart from "../assets/img/empty-cart.png"

const CartEmpty:React.FC=()=> {
    return (
        <div className="content">
            <div className="cart cart--empty">
                <h2>
                    Your Cart is empty.<span>😕</span>
                </h2>
                <p>
                    You probably haven't ordered yet. 
                    <br />
                    To order food, go to the main page.
                </p>
                <img src={emptyCart} alt="Empty cart" />
                <Link className="button button--black" to="/fastdelivery">
                    <span>Come back</span>
                </Link>
            </div>
        </div>
    )
}

export default CartEmpty
