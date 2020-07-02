export const addItemToCart = (cartItems, cartItemToAdd) => {
    const itemExist = cartItems.find((item) => item.id === cartItemToAdd.id)

    if (itemExist) {
        return cartItems.map((item) =>
            item.id === cartItemToAdd.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        )
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const targetItem = cartItems.find((item) => item.id === cartItemToRemove.id)

    if (targetItem.quantity === 1) {
        return cartItems.filter((item) => item.id !== cartItemToRemove.id)
    }
    
    return cartItems.map((item) =>
        item.id === cartItemToRemove.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
    )
}
