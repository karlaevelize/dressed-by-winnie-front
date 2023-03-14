import { useRef, useState } from "react";

export const AddToCartModal = ({ setModalOpen, addToCart, product }) => {
  const { id, name, imageUrl, price } = product;

  const [size, setSize] = useState("S");
  const [quantity, setQuantity] = useState(1);

  console.log(quantity);

  const modalRef = useRef();

  const closeModalWithOutsideClick = (e) => {
    if (modalRef.current === e.target) {
      setModalOpen(false);
    }
  };

  const sizes = [
    { id: 1, name: "XS", neck: "10-20" },
    { id: 2, name: "S", neck: "20-30" },
    { id: 3, name: "M", neck: "30-40" },
    { id: 4, name: "L", neck: "40-50" },
    { id: 5, name: "XL", neck: "50-60" },
  ];

  return (
    <div
      ref={modalRef}
      onClick={closeModalWithOutsideClick}
      class="fixed inset-0 z-10 bg-gray-500 bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      {/* <!-- Modal content --> */}
      <div class="bg-white w-6/12 rounded-lg shadow dark:bg-gray-700 ">
        {/* <!-- Modal header --> */}
        <div class="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-600">
          <h3 class="text-gray-900 text-xl lg:text-2xl font-semibold dark:text-white">
            {name}
          </h3>
          <button
            onClick={() => setModalOpen(false)}
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Close
          </button>
        </div>
        {/* <!-- Modal body --> */}
        <div class="p-6 space-y-6 flex justify-around">
          <div class="relative flex items-end">
            <img
              style={{ width: "200px", borderRadius: "8px" }}
              src={imageUrl}
              alt={name}
            />
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
          <div>
            <div class="flex flex-col gap-5">
              <div class="flex justify-between text-sm text-center item-center">
                {sizes.map((size) => (
                  <div>
                    <input
                      name="sizes"
                      type="radio"
                      id={size.id}
                      value={size.id}
                      class="hidden peer"
                    />
                    <label
                      for={size.id}
                      class="inline-block cursor-pointer w-10 h-10 p-3 font-semibold text-black rounded-full peer-hover:bg-gray-300  peer-checked:bg-pale-green peer-checked:text-white"
                    >
                      {size.name}
                    </label>
                  </div>
                ))}
              </div>
              <div class="mb-5">
                <label for="quantity" class="mb-3 block">
                  Quantity:
                </label>
                <input
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  type="number"
                  name="quantity"
                  placeholder="1"
                  min="1"
                  class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:shadow-md"
                />
              </div>
              <div
                onClick={() => {
                  addToCart({
                    ...product,
                    size: size,
                    quantity: parseInt(quantity),
                  });
                  setModalOpen(false);
                }}
                class="flex cursor-pointer justify-center items-center space-x-1.5 rounded-lg bg-pale-green px-4 py-1.5 text-white duration-100 hover:bg-pale-yellow"
              >
                Add to cart
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
