import logo from "../media/logo.png";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div class="shadow bg-white">
      <div class="h-64 mx-auto px-5 flex flex-col items-center justify-center">
        <h1 class="text-5xl font-bold font-cursive text-gray-800">
          Here Something Nice about the Shop
        </h1>
        {/* <p class="italic">Here something that confirms the something nice</p> */}
      </div>
    </div>
  );
};
