import { Link } from "react-router-dom";

const MainMealLoading = ({ meal }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center absolute">
      <figure className="px-0 xl:px-16 -z-10">
        <img
          className={
            " rounded-full shadow-lg aspect-square w-[14rem] md:w-[18rem] xl:w-[20rem] animate-pulse bg-gray-500"
          }
        />
      </figure>
      <div className="bg-white -mt-[4rem] ml-0 sm:-ml-[5rem] lg:-ml-[9rem] sm:mt-0 w-[75%] sm:w-[50%] h-full p-2 lg:p-10 rounded-lg shadow-lg flex flex-col gap-1 ">
        <h3 className="font-bold text-lg lg:text-xl bg-gray-500 animate-pulse rounded-md w-[60%] truncate">
          <p className="invisible">{meal.strMeal}</p>
        </h3>
        <div className="text-gray-500 text-sm bg-gray-500 animate-pulse rounded-md">
          <p className="invisible">
            <b>Category : </b> {meal.strCategory}
          </p>
        </div>
        <div className="line-clamp-2 text-sm sm:line-clamp-4 bg-gray-500 animate-pulse rounded-md ">
          <p className="invisible">
            <b>Instruction : </b>
            {meal.strInstructions}
          </p>
        </div>
        <div className="bg-gray-500 animate-pulse rounded-md w-[5rem]">
          <p className="invisible">See More...</p>
        </div>
      </div>
    </div>
  );
};

export default MainMealLoading;
