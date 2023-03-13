import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import signUpImage from "../media/signup.png";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../store/user/thunks";
import { selectToken } from "../store/user/selectors";

export const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector(selectToken);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(firstName, lastName, email, password));
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  return (
    <div class="container mx-auto">
      <div class="flex  justify-center px-6 my-12">
        {/* <!-- Row --> */}
        <div class="border rounded-lg border-pale-green w-full xl:w-3/4 lg:w-11/12 flex">
          {/* <!-- Col --> */}
          <div
            class="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
            style={{
              backgroundImage: `url(${signUpImage})`,
            }}
          ></div>
          {/* <!-- Col --> */}
          <div class="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
            <h3 class="pt-4 text-2xl text-center">Create an Account!</h3>
            <form
              onSubmit={handleSubmit}
              class="px-8 pt-6 pb-8 mb-4 bg-white rounded"
            >
              <div class="mb-4 md:flex md:justify-between">
                <div class="mb-4 md:mr-2 md:mb-0">
                  <label
                    class="block mb-2 text-sm font-bold text-gray-700"
                    for="firstName"
                  >
                    First Name
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
                    Last Name
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
              </div>
              <div class="mb-4">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700"
                  for="email"
                >
                  Email
                </label>
                <input
                  class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div class="mb-4 md:flex md:justify-between">
                <div class="mb-4 md:mr-2 md:mb-0">
                  <label
                    class="block mb-2 text-sm font-bold text-gray-700"
                    for="password"
                  >
                    Password
                  </label>
                  <input
                    class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="******************"
                  />
                  {/* <p class="text-xs italic text-red-500">
                    Please choose a password.
                  </p> */}
                </div>
                <div class="md:ml-2">
                  <label
                    class="block mb-2 text-sm font-bold text-gray-700"
                    for="c_password"
                  >
                    Confirm Password
                  </label>
                  <input
                    class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="c_password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    type="password"
                    placeholder="******************"
                  />
                </div>
              </div>
              <div class="mb-6 text-center">
                <button
                  class="w-full px-4 py-2 font-bold text-white bg-pale-green rounded-full hover:shadow focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Register Account
                </button>
              </div>
              <hr class="mb-6 border-t" />
              <div class="text-center">
                <Link to="/login" class="inline-block text-sm align-baseline">
                  Already have an account? Login!
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
