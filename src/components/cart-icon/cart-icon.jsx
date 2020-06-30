import React from "react"
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg"
import { toggleCartHidden } from "../../redux/cart/cart-actions"
import { connect } from "react-redux"

import "./cart-icon.scss"
import { selectCartItemsCount } from "../../redux/cart/cart-selectors"

const CartIcon = ({ toggleCartHidden, itemCount }) => {
    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{itemCount}</span>
        </div>
    )
}

// use memoization (reselect library) to only update itemCount if the cartItem's changed
const mapStateToProps = (cart) => ({
    itemCount: selectCartItemsCount(cart),
})

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
