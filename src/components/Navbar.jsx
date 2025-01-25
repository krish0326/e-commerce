import { useDispatch } from "react-redux";
import { setSearch } from "../redux/Slices.jsx/Searchslice";
const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav className="flex flex-col lg:flex-row py-3 mx-6 mb-10 justify-between">
      {/* forst one */}
      <div>
        <h3 className="text-xl font-bold text-gray-600">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        <h1 className="text-xl font-bold">Flavoro Foods</h1>
      </div>
      {/* secound one */}
      <div>
        <input
          type="search"
          placeholder="search here"
          id=""
          name=""
          autoComplete="off"
          onChange={(e)=> dispatch(setSearch(e.target.value))}
          className="p-3 border border-gray-400 text-sm outline-none rounded-lg w-full lg:w-[25vw]"
        />
      </div>
    </nav>
  );
};

export default Navbar;
