import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import loginImage from "../media/login.png";
import { login } from "../store/user/thunks";
import { selectToken } from "../store/user/selectors";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector(selectToken);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  return (
    <div class="container mx-auto">
      <div class="flex justify-center px-6 my-20">
        {/* <!-- Row --> */}
        <div class="border rounded-lg border-pale-green w-full xl:w-3/4 lg:w-11/12 flex">
          {/* <!-- Col --> */}
          <div
            class="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
            style={{
              backgroundImage: `url(${loginImage})`,
            }}
          ></div>
          {/* <!-- Col --> */}
          <div class="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
            <h3 class="pt-4 text-2xl text-center">Login</h3>
            <form
              onSubmit={handleSubmit}
              class="px-8 pt-6 pb-8 mb-4 bg-white rounded"
            >
              <div class="mb-4">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700"
                  for="email"
                >
                  Email
                </label>
                <input
                  class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div class="mb-4 md:mr-2 md:mb-0">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700"
                  for="password"
                >
                  Password
                </label>
                <input
                  class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  type="password"
                  placeholder="******************"
                />
              </div>
              <div class="mb-6 text-center">
                <button
                  class="w-full px-4 py-2 font-bold text-white bg-pale-green rounded-full hover:shadow focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Login
                </button>
              </div>
              <hr class="mb-6 border-t" />
              <div class="text-center">
                <Link to="/signup" class="inline-block text-sm align-baseline">
                  Don't have an account yet? Sign Up!
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
