import { Link } from "react-router-dom";

const MealCard = ({ src, alt, id }) => {
  return (
    <div className="card  relative z-1 group">
      <div className="w-[10rem] h-[10rem] sm:w-[15rem] sm:h-[15rem] absolute border-2 rounded-xl shadow-lg border-[#FFB100] -z-10 ml-3 mt-3 group-hover:scale-105" />
      <figure className="bg-gray-200 hover:bg-white rounded-xl hover:scale-105 w-[10rem] h-[10rem] sm:w-[15rem] sm:h-[15rem]">
        <img
          className="rounded-lg w-[10rem] h-[10rem] sm:w-[15rem] sm:h-[15rem] object-contain"
          src={src}
          alt={alt}
          loading="lazy"
        />
        <figcaption className="text-over-img font-bold text-[#FFB100] hover:text-white text-lg bg-black/40 rounded-xl hover:bg-black/0 transition duration-500">
          <Link
            to={"/foods/detail/" + id}
            className="flex items-center justify-center h-full w-full text-center"
          >
            {alt}
          </Link>
        </figcaption>
      </figure>
    </div>
  );
};

export default MealCard;
