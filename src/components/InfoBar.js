import logo from "../media/logo.png";
import { Link } from "react-router-dom";

export const InfoBar = () => {
  return (
    <div class="shadow bg-white">
      <div class="h-16 text-sm mx-auto px-5 flex items-center justify-around gap-8">
        <div>
          <span class="text-green-700 font-bold">✓</span> Shipping Worldwide
        </div>
        <div>
          <span class="text-green-700 font-bold">✓</span> Only the best quality
          materials
        </div>
        <div>
          <span class="text-green-700 font-bold">✓</span> Handmade, each piece
          is unique
        </div>
      </div>
    </div>
  );
};
