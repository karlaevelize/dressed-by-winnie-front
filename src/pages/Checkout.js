import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  selectShoppingCart,
  selectShoppingCartTotal,
} from "../store/shoppingCart/selectors";
import { increase, decrease, remove, reset } from "../store/shoppingCart/slice";

export const Checkout = () => {
  const dispatch = useDispatch();
  const { cart, total } = useSelector(selectShoppingCartTotal);
  const shippingCosts = 4;
  return (
    <div class="h-screen pt-5">
      <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div class="rounded-lg bg-white p-6 shadow-md md:w-2/3">
          <div class="flex items-baseline gap-6">
            <h1 class="mb-10 text-center text-2xl  font-bold">Address</h1>
            <>
              {" "}
              <button class="mt-6 w-full rounded-md bg-white py-1.5 font-medium hover:shadow">
                Use Account Info
              </button>
            </>
          </div>
          <form
            // onSubmit={handleSubmit}
            class="px-8 pt-6 pb-8 mb-4 bg-white rounded"
          >
            <div class="mb-4 md:flex md:justify-start">
              <div class="mb-4 md:mr-2 md:mb-0">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700"
                  for="firstName"
                >
                  Name
                </label>
                <input
                  class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="firstName"
                  // value={firstName}
                  // onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div class="md:ml-2">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700"
                  for="lastName"
                >
                  Surname
                </label>
                <input
                  class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="lastName"
                  // value={lastName}
                  // onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  placeholder="Last Name"
                />
              </div>
              <div class="md:ml-2">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700"
                  for="email"
                >
                  Email
                </label>
                <input
                  class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="email"
                  // value={lastName}
                  // onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  placeholder="Email"
                />
              </div>
            </div>
            <div class="mb-4 md:flex md:justify-start">
              <div class="mb-4 md:mr-2 md:mb-0">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700"
                  for="street"
                >
                  Street
                </label>
                <input
                  class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="street"
                  // value={firstName}
                  // onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  placeholder="Street"
                />
              </div>
              <div class="md:ml-2">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700"
                  for="lastName"
                >
                  Number
                </label>
                <input
                  class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="number"
                  // value={lastName}
                  // onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  placeholder="Number"
                />
              </div>
              <div class="md:ml-2">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700"
                  for="appt"
                >
                  Appt <span class="text-xs font-extralight">(opt)</span>
                </label>
                <input
                  class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="appt"
                  // value={lastName}
                  // onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  placeholder="Appt"
                />
              </div>
            </div>
            <div class="mb-4 md:flex md:justify-start">
              <div class="mb-4 md:mr-2 md:mb-0">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700"
                  for="postcode"
                >
                  Postcode
                </label>
                <input
                  class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="postcode"
                  // value={firstName}
                  // onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  placeholder="Postcode"
                />
              </div>
              <div class="md:ml-2">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700"
                  for="city"
                >
                  City
                </label>
                <input
                  class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="lastName"
                  // value={lastName}
                  // onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  placeholder="City"
                />
              </div>
              <div class="md:ml-2">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700"
                  for="country"
                >
                  Country
                </label>
                <input
                  class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="country"
                  // value={lastName}
                  // onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  placeholder="Country"
                />
              </div>
            </div>
            <div class="mb-4 md:mr-2 md:mb-0">
              <label
                class="block mb-2 text-sm font-bold text-gray-700"
                for="message"
              >
                Message <span class="text-xs font-extralight">(opt)</span>
              </label>
              <input
                class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="message"
                // value={firstName}
                // onChange={(e) => setFirstName(e.target.value)}
                type="text"
                placeholder="Any requests"
              />
            </div>
          </form>
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
                <p class="mb-1 text-lg font-bold">€ {total + shippingCosts}</p>
                {/* <p class="text-sm text-gray-700">including VAT</p> */}
              </div>
            </div>
            <Link to="/checkout">
              <button class="mt-6 w-full rounded-md bg-pale-green py-1.5 font-medium text-blue-50 hover:shadow">
                Confirm & Buy
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
