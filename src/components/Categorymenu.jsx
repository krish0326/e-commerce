import { useEffect, useState } from "react";
import FoodData from "../data/Fooddata";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/Slices.jsx/categoryslice";

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  const selectedcategory = useSelector((state) => state.category.category);

  // Function to list unique categories
  const listUniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(FoodData.map((food) => food.category)),
    ];
    setCategories(uniqueCategories);
    console.log(uniqueCategories);
  };

  useEffect(() => {
    listUniqueCategories();
  }, []);

  return (
    <div className="ml-6">
      {/* First section */}
      <div className="text-xl font-semibold">
        <h3>Find The Best Food</h3>
      </div>

      {/* Second section - Categories list */}
      <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
        {/* Render category buttons */}
        <button
          onClick={() => dispatch(setCategory("All"))} // Dispatch setCategory action
          className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${
            selectedcategory === "All" && "bg-green-500 text-white"
          }`}
        >
          All
        </button>

        {categories.length > 0 ? (
          categories.map((category) => (
            <button
              onClick={() => dispatch(setCategory(category))} // Dispatch setCategory action
              key={category} // Use category name as the key
              className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${
                selectedcategory === category && "bg-green-500 text-white"
              }`}
            >
              {category}
            </button>
          ))
        ) : (
          <p>Loading categories...</p> // Show loading text until categories are set
        )}
      </div>
    </div>
  );
};

export default CategoryMenu;
