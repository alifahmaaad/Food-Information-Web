import { Link } from "react-router-dom";

const CategoryCard = ({ src, alt, caption }) => {
  return (
    <div className="card w-[15rem] relative z-1 rounded-xl shadow-xl p-3 mt-[7rem] bg-gray-100 hover:scale-110 group">
      <Link to={"category/detail/" + caption}>
        <figure className="bg-gray-100 rounded-full relative rounded-full -mt-[7rem]">
          <img
            className="rounded-full aspect-square object-cover shadow-lg group-hover:bg-black/20"
            src={src}
            alt={alt}
          />
          <figcaption className="font-extrabold text-lg py-2">
            <p className="flex items-center justify-center h-full w-full rounded-full">
              {caption}
            </p>
          </figcaption>
        </figure>
        <div className="flex items-center justify-center  text-center">
          <p className="line-clamp-6">{alt}</p>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
