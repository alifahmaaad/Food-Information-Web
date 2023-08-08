import { useState } from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ src, alt, caption }) => {
  const [loading, setLoading] = useState(true);
  return (
    <div className="card w-[10rem] sm:w-[15rem] relative z-1 rounded-xl shadow-md p-3 mt-[7rem] bg-gray-100 hover:scale-110 group transition duration-700">
      <Link to={"category/detail/" + caption}>
        <figure className="">
          {loading && (
            <img className="rounded-full aspect-square object-cover shadow-lg group-hover:brightness-50 w-full h-full -mt-[7rem] bg-gray-500 animate-pulse" />
          )}
          <img
            className={
              !loading
                ? "rounded-full aspect-square object-cover shadow-md shadow-[#FFB100] group-hover:brightness-50 w-full h-full -mt-[7rem] bg-gray-100 "
                : ""
            }
            src={src}
            alt={alt}
            loading="lazy"
            onLoad={() => setLoading(false)}
          />
          <figcaption className="font-extrabold text-lg py-2">
            <p className="flex items-center justify-center h-full w-full rounded-full ">
              {caption}
            </p>
          </figcaption>
        </figure>
        <div className="flex items-center justify-center  text-center flex-col">
          <p className="line-clamp-6 ">{alt}</p>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
