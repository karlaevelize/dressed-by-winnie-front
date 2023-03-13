import logo from "../media/logo.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "../store/user/selectors";
import { logOut } from "../store/user/slice";

export const Navigation = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  return (
    <div class="shadow bg-white">
      <div class="h-24 mx-auto px-5 flex items-center justify-between">
        <Link
          to="/"
          class="text-2xl hover:text-cyan-500 transition-colors cursor-pointer"
        >
          <img style={{ height: "100px" }} src={logo} />
        </Link>
        <ul class="flex items-center gap-5">
          <li>
            {!token ? (
              <Link
                to="/login"
                class="hover:text-pale-yellow transition-colors"
              >
                Login
              </Link>
            ) : (
              <button
                class="w-full px-4 py-2  bg-pale-green rounded-full hover:shadow focus:outline-none focus:shadow-outline"
                onClick={() => dispatch(logOut())}
              >
                Logout
              </button>
            )}
          </li>
          <li>
            <Link
              to="/shopping-cart"
              class="hover:text-pale-yellow transition-colors"
            >
              Shopping Cart
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
