import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  selectShoppingCart,
  selectShoppingCartTotal,
} from "../store/shoppingCart/selectors";
import { increase, decrease, remove, reset } from "../store/shoppingCart/slice";

export const ShoppingCart = () => {
  const dispatch = useDispatch();
  const { cart, total } = useSelector(selectShoppingCartTotal);
  const shippingCosts = 4;

  return (
    <div class="h-screen pt-5">
      {cart.length > 0 ? (
        <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div class="rounded-lg bg-white p-6 shadow-md md:w-2/3">
            <h1 class="mb-10 text-center text-2xl  font-bold">Cart Items</h1>
            {cart.map((item) => (
              <div
                key={item.id}
                class="justify-between mb-6 rounded-lg flex bg-white p-6 shadow-md sm:flex sm:justify-start"
              >
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  class="w-full rounded-lg sm:w-40"
                />
                <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                  <div class="mt-5 sm:mt-0">
                    <h2 class="text-lg font-bold text-gray-900">{item.name}</h2>
                    <p class="mt-1 text-s text-gray-700">{item.size}</p>
                  </div>
                  <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div class="flex items-center border-gray-100">
                      <span
                        onClick={() => dispatch(decrease(item))}
                        class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:shadow "
                      >
                        -
                      </span>
                      <input
                        class="h-8 w-8 border bg-white text-center text-xs outline-none"
                        type="number"
                        value={item.quantity}
                        min="1"
                        max="10"
                      />
                      <span
                        onClick={() => dispatch(increase(item))}
                        class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-shadow"
                      >
                        +
                      </span>
                    </div>
                    <div class="flex items-center space-x-4">
                      <p class="text-sm">€ {item.price}</p>
                      <p onClick={() => dispatch(remove(item))} class="text-sm">
                        X
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Total */}
          <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <div>
              <h1 class="mb-10 text-center text-2xl font-bold">Total</h1>
              <div class="mb-2 flex justify-between">
                <p class="text-gray-700">Subtotal</p>
                <p class="text-gray-700">€ {total}</p>
              </div>
              <div class="flex justify-between">
                <p class="text-gray-700">Shipping</p>
                <p class="text-gray-700">€ 4</p>
              </div>
              <hr class="my-4" />
              <div class="flex justify-between">
                <p class="text-lg font-bold">Total</p>
                <div class="">
                  <p class="mb-1 text-lg font-bold">
                    € {total + shippingCosts}
                  </p>
                  {/* <p class="text-sm text-gray-700">including VAT</p> */}
                </div>
              </div>
              <Link to="/checkout">
                <button class="mt-6 w-full rounded-md bg-pale-green py-1.5 font-medium text-blue-50 hover:shadow">
                  Check out
                </button>
              </Link>
              <button
                onClick={() => dispatch(reset())}
                class="mt-6 w-full rounded-md bg-red-500 py-1.5 font-medium text-blue-50 hover:shadow"
              >
                Cancel & Clean Cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <h1 class="mt-20 text-center text-2xl  font-bold">
          Your cart is empty!
        </h1>
      )}
    </div>
  );
};
