import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import Itemcard from "./Itemcard";
import { useSelector } from "react-redux";
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from "react-router-dom"; // Fixed typo here

const Cart = () => {
  const [activecart, setActiveCart] = useState(false); // Initially set to false to hide cart

  // Fetch cartItems from Redux store
  const cartItems = useSelector((state) => state.cart.Cart);

  // Calculate the total quantity
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalPrice = cartItems.reduce(
    (totalPrice, item) => totalPrice + item.qty * item.price,
    0
  );

  const navigate = useNavigate(); // Fixed typo here

  return (
    <>
      {/* Cart Sidebar */}
      <div
        className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full p-5 bg-white ${
          activecart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-50`}
      >
        <div className="flex justify-between items-center my-3">
          <span className="text-xl font-bold text-gray-800">My Order</span>
          <IoMdClose
            onClick={() => setActiveCart(false)} // Close the cart
            className="border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-300 hover:border-red-300 border-2 cursor-pointer"
          />
        </div>

        {/* Cart Items List */}
        <div className="overflow-y-auto" style={{ maxHeight: "70vh" }}>
          {cartItems.length === 0 ? (
            <p className="text-gray-800 text-xl font-bold text-center">
              Your cart is empty.
            </p>
          ) : (
            cartItems.map((food) => (
              <Itemcard
                key={food.id}
                id={food.id}
                name={food.name}
                price={food.price}
                img={food.img}
                qty={food.qty}
              />
            ))
          )}
        </div>

        {/* Cart Summary */}
        <div className="absolute bottom-0 w-full">
          <h3 className="font-semibold text-gray-800">
            Items: {totalQty}
          </h3>
          <h3 className="font-semibold text-gray-800">
            Total Amount: ${totalPrice.toFixed(2)} {/* Formatting the totalPrice to two decimal places */}
          </h3>
          <hr className="w-[90vw] lg:w-[18vw] my-2" />
          <button
            onClick={() => navigate("/success")}
            className="bg-green-500 font-bold px-3 text-white py-2 rounded-lg w-[90vw] lg:w-[18vw] mb-5"
          >
            Checkout
          </button>
        </div>
      </div>

      {/* Cart Icon */}
      <FaCartShopping
        onClick={() => setActiveCart(!activecart)} // Toggle cart visibility
        className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-4 right-4 ${
          totalQty > 0 && "animate-bounce delay-500 transition-all"
        }`}
      />
    </>
  );
};

export default Cart;
