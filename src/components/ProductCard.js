import { useState } from "react";
import { Link } from "react-router-dom";
import { AddToCartModal } from "./AddToCartModal";

export const ProductCard = ({ product, addToCart }) => {
  const { id, imageUrl, name, price } = product;

  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
        {/* <Link to={`/products/${id}`}> */}
        <div class="relative flex items-end overflow-hidden rounded-xl">
          <img src={imageUrl} alt={name} />
          <div class="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-yellow-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span class="ml-1 text-sm text-slate-400">4.9</span>
          </div>
        </div>
        {/* </Link> */}
        <div class="mt-1 p-2">
          <h2 class="text-slate-700">{name}</h2>
          <p class="mt-1 text-sm text-slate-400">Amsterdam, Netherlands</p>

          <div class="mt-3 flex items-end justify-between">
            <p class="text-lg font-bold">€ {price}</p>
            <div class="flex items-center space-x-1.5 rounded-lg bg-pale-green px-4 py-1.5 text-white duration-100 hover:shadow">
              <button onClick={() => setModalOpen(!modalOpen)} class="text-sm">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </article>
      {modalOpen && (
        <AddToCartModal
          setModalOpen={setModalOpen}
          addToCart={addToCart}
          product={product}
        />
      )}
    </>
  );
};
