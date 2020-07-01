import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { createStructuredSelector } from "reselect"
import {
    selectCartItems,
    selectCartHidden,
} from "../../redux/cart/cart-selectors"
import { toggleCartHidden } from "../../redux/cart/cart-actions"

import CustomButton from "../custom-button/custom-button"
import CartItem from "../cart-item/cart-item"

import "./cart-dropdown.scss"

function CartDropdown({ cartItems, history, dispatch }) {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.length ? (
                    cartItems.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))
                ) : (
                    <span className="empty-message">Your cart is empty</span>
                )}
            </div>
            <CustomButton
                onClick={() => {
                    dispatch(toggleCartHidden())
                    history.push("/checkout")
                }}
            >
                GO TO CHECKOUT
            </CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    hidden: selectCartHidden,
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
