import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Hero, InfoBar, ProductCard } from "../components";
import { fetchProducts } from "../store/products/thunks";
import { selectProducts } from "../store/products/selectors";
import { selectShoppingCart } from "../store/shoppingCart/selectors";
import { add, increase } from "../store/shoppingCart/slice";

export const Homepage = () => {
  const products = useSelector(selectProducts);
  const cart = useSelector(selectShoppingCart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const addToCart = (product) => {
    cart.find((item) => item.id === product.id && item.size === product.size)
      ? dispatch(increase(product))
      : dispatch(add(product));
  };

  return (
    <div>
      <Hero />
      <InfoBar />
      <div class="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products &&
          products.map((product) => (
            <ProductCard product={product} addToCart={addToCart} />
          ))}
      </div>
    </div>
  );
};
