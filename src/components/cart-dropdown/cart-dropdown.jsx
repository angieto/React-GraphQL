import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { selectCartItems } from "../../redux/cart/cart-selectors"

import CustomButton from "../custom-button/custom-button"
import CartItem from "../cart-item/cart-item"

import "./cart-dropdown.scss"

function CartDropdown({ cartItems }) {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.map((item) => (
                    <CartItem key={item.id} item={item} />
                ))}
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
})

export default connect(mapStateToProps)(CartDropdown)
