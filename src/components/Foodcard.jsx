import { AiFillStar } from "react-icons/ai";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addtocart } from "../redux/Slices.jsx/Cartslice";

const Foodcard = ({ id, img, name, desc, price, rating, handletoast }) => {
  const dispatch = useDispatch();

  return (
    <div className="font-bold w-[250px] p-5 bg-white flex flex-col rounded-lg gap-2">
      <img
        src={img}
        alt="not loaded"
        className="w-auto h-[130px] hover:scale-110 transition-all duration-500"
      />
      <div className="flex justify-between text-sm">
        <h2>{name}</h2>
        <span className="text-green-500">₹{price}</span>
      </div>
      <p className="text-sm font-normal">{desc.slice(0, 50)}...</p>
      <div className="flex justify-between items-center">
        <span className="flex justify-center items-center">
          <AiFillStar className="mr-1 text-yellow-400" /> {rating}
        </span>
        <button
          onClick={() => {
            dispatch(addtocart({ id, name, img, price, rating, qty: 1 }));
            handletoast(name);
          }}
          className="p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

// Prop validation
Foodcard.propTypes = {
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  handletoast: PropTypes.func.isRequired, // Ensures handletoast function is passed as a prop
};

export default Foodcard;
