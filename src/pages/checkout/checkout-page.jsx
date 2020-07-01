import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import {
    selectCartItems,
    selectCartTotal,
} from "../../redux/cart/cart-selectors"

import CheckoutItem from "../../components/checkout-item/checkout-item"

import "./checkout-page.scss"

const CheckoutPage = ({ cartItems, total }) => {
    const headerItems = [
        "product",
        "description",
        "quantity",
        "price",
        "remove",
    ]

    return (
        <div className="checkout-page">
            <div className="checkout-header">
                {headerItems.map((headerName) => (
                    <div className="header-block">
                        <span>{headerName}</span>
                    </div>
                ))}
            </div>

            {cartItems.map((cartItem) => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}

            <div className="total">
                <span>Total: ${total}</span>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal,
})

export default connect(mapStateToProps)(CheckoutPage)
