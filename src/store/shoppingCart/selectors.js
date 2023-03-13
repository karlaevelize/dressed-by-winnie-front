export const selectShoppingCart = (reduxState) => reduxState.cart.shoppingCart;

export const selectShoppingCartTotal = (reduxState) => {
  if (reduxState.cart.shoppingCart) {
    const { total, quantity } = reduxState.cart.shoppingCart.reduce(
      (cart, item) => {
        const { price, quantity } = item;
        const itemTotal = price * quantity;
        cart.total = cart.total + itemTotal;
        cart.quantity = cart.quantity + quantity;

        return cart;
      },
      { total: 0, quantity: 0 }
    );
    const cart = reduxState.cart.shoppingCart;
    return { cart, total, quantity };
  } else {
    return { cart: [], total: 0, quantity: 0 };
  }
};
