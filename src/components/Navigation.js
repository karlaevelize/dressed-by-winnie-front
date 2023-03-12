import logo from "../media/logo.png";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <div class="shadow bg-white">
      <div class="h-24 mx-auto px-5 flex items-center justify-between">
        <Link
          to="/"
          class="text-2xl hover:text-cyan-500 transition-colors cursor-pointer"
        >
          <img style={{ height: "100px" }} src={logo} />
        </Link>
        {/* <div class="flex items-center gap-5">
          <p class="text-lg">Hoodies</p>
          <p class="text-lg">Bow Ties</p>
        </div> */}
        <ul class="flex items-center gap-5">
          <li>
            <Link to="/login" class="hover:text-pale-yellow transition-colors">
              Login
            </Link>
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
