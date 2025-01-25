import { FaPlus } from "react-icons/fa";
import { IoRemoveOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {removefromcart,incrementqty,decrementqty} from "../redux/Slices.jsx/Cartslice"
import toast from "react-hot-toast";
const Itemcard = ({id,name,price,qty,img}) => {
      
    const dispatch = useDispatch();
  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3">
    <MdDelete onClick={()=>{dispatch(removefromcart({id,name,price,img,qty}));
    toast(`${name} Removed!`, {
  icon: '👏',
});
    }} className="absolute right-7 text-gray-600 cursor-pointer" />

      <img
      src={img}
        alt="not lodded"
        className="w-[50px] h-[50px]"
      />
      <div className="leading-5">
        <div>
          <h2 className="font-bold text-gray-800">{name}</h2>
        </div>
        <div className="flex justify-between ">
          <span className="text-green-500 font-bold">{price}</span>
          <div className="flex  justify-center items-center absolute right-7 gap-2">
            <IoRemoveOutline onClick={()=> qty > 1  ? dispatch(decrementqty({id})) :(qty=0) } className=" border  border-gray-600  text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1  text-xl transition-all ease-linear  cursor-pointer  " />
            <span>{qty} </span>
            <FaPlus onClick={()=>qty >= 1 ?dispatch(incrementqty({id})) : (qty=0)} className="border  border-gray-600  text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1  text-xl transition-all ease-linear  cursor-pointer  " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Itemcard;
