export const selectShoppingCart = (reduxState) => reduxState.cart.shoppingCart;
export const selectShoppingCartTotal = (reduxState) => {
  const { total, quantity } = reduxState.cart.shoppingCart.reduce(
    (cart, item) => {
      const { price, quantity } = item;
      const itemTotal = price * quantity;
      console.log("item total", itemTotal);
      cart.total = cart.total + itemTotal;
      cart.quantity = cart.quantity + quantity;

      return cart;
    },
    { total: 0, quantity: 0 }
  );
  console.log("total and quantity", total, quantity);
  const cart = reduxState.cart.shoppingCart;
  return { cart, total, quantity };
};
