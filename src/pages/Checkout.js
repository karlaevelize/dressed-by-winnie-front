import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { selectShoppingCartTotal } from "../store/shoppingCart/selectors";
import { selectUser } from "../store/user/selectors";
import { createOrder } from "../store/order/thunks";
import { reset } from "../store/shoppingCart/slice";

export const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [appt, setAppt] = useState("");
  const [postcode, setPostcode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");

  const { cart, total, quantity } = useSelector(selectShoppingCartTotal);
  const user = useSelector(selectUser);
  const shippingCosts = 4;

  useEffect(() => {
    if (cart.length < 1) {
      navigate("/");
    }
  }, [cart, navigate]);

  const handleOrder = () => {
    dispatch(
      createOrder(
        { cart, total, quantity },
        {
          email,
          street,
          number,
          appt,
          postcode,
          city,
          country,
          message,
          userId: user?.id,
        }
      )
    );
    dispatch(reset());
    navigate("/order-confirmation");
  };

  const useAccountInfo = () => {
    const { firstName, lastName, email } = user;
    setFirstName(firstName);
    setLastName(lastName);
    setEmail(email);
    setStreet("Loolaan");
    setNumber("41");
    setPostcode("7314AD");
    setCity("Apeldoorn");
    setCountry("Netherlands");
    setAppt("32");
  };

  return (
    <div class="h-screen pt-5">
      <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div class="rounded-lg bg-white p-6 shadow-md md:w-2/3">
          <div class="flex items-baseline gap-6">
            <h1 class="mb-10 text-center text-2xl  font-bold">Address</h1>
            <>
              {user && (
                <button
                  onClick={useAccountInfo}
                  class="mt-6 w-full rounded-md bg-white py-1.5 font-medium hover:shadow"
                >
                  Use Account Info
                </button>
              )}
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
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
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
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  Street + Number
                </label>
                <input
                  class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="street"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                  type="text"
                  placeholder="Street"
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
                  value={appt}
                  onChange={(e) => setAppt(e.target.value)}
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
                  value={postcode}
                  onChange={(e) => setPostcode(e.target.value)}
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
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
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
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
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
                value={message}
                onChange={(e) => setMessage(e.target.value)}
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
            <button
              onClick={handleOrder}
              class="mt-6 w-full rounded-md bg-pale-green py-1.5 font-medium text-blue-50 hover:shadow"
            >
              Confirm & Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
