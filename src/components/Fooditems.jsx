import Foodcard from "./Foodcard";
import FoodData from "../data/Fooddata";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const Fooditems = () => {
  const search = useSelector((state) => state.search.search);
  const category = useSelector((state) => state.category.category);

  const handletoast = (name) => toast.success(`Added ${name}`);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10">
        {
          FoodData.filter((food) => {
            if (category === "All") {
              return food.name.toLocaleLowerCase().includes(search.toLocaleLowerCase());
            } else {
              return category === food.category && food.name.toLocaleLowerCase().includes(search.toLocaleLowerCase());
            }
          }).map((food) => (
            <Foodcard
              key={food.id}
              id={food.id}
              name={food.name}
              price={food.price}
              desc={food.desc}
              rating={food.rating}
              img={food.img}
              handletoast={handletoast}
            />
          ))
        }
      </div>
    </>
  );
};

export default Fooditems;
