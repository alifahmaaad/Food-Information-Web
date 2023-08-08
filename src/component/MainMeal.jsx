import { useState } from "react";
import { Link } from "react-router-dom";
import MainMealLoading from "./MainMealLoading";

const MainMeal = ({ meal }) => {
  const [imgLoading, setImgLoading] = useState(true);
  return (
    <>
      {imgLoading && (
        <div className="relative">
          <MainMealLoading meal={meal} />
        </div>
      )}
      <div
        className={
          (imgLoading ? "invisible " : "") +
          "flex flex-col sm:flex-row items-center justify-center relative"
        }
      >
        <figure className="px-0 xl:px-16">
          <img
            src={meal.strMealThumb}
            className=" rounded-full shadow-lg aspect-square w-[14rem] md:w-[18rem] xl:w-[20rem]"
            alt={meal.strMeal}
            loading="lazy"
            onLoad={() => setImgLoading(false)}
          />
        </figure>
        <div className="bg-white -mt-[4rem] ml-0 sm:-ml-[5rem] lg:-ml-[9rem] sm:mt-0 w-[75%] sm:w-[50%] h-full p-2 lg:p-10 rounded-lg shadow-lg hover:scale-110 transition duration-700">
          <h3 className="font-bold text-lg lg:text-xl">{meal.strMeal}</h3>
          <p className="text-gray-500 text-sm">
            <b>Category : </b> {meal.strCategory}
          </p>
          <p className="line-clamp-2 text-sm sm:line-clamp-4 text-gray-500">
            <b>Instruction : </b>
            {meal.strInstructions}
          </p>
          <Link to={"/foods/detail/" + meal.idMeal}>See More...</Link>
        </div>
      </div>
    </>
  );
};

export default MainMeal;
