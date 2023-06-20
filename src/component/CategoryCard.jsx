import { Link } from "react-router-dom";

const CategoryCard = ({ src, alt, caption }) => {
  return (
    <div className="card w-[18rem] relative z-1 ">
      <figure className="bg-gray-200 hover:bg-white rounded-xl hover:scale-110">
        <img className="rounded-xl" src={src} alt={alt} />
        <figcaption className="text-over-img font-bold text-white text-lg bg-black/40 rounded-xl hover:bg-black/0">
          <Link
            to={"category/detail/" + caption}
            className="flex items-center justify-center h-full w-full"
          >
            {caption}
          </Link>
        </figcaption>
      </figure>
    </div>
  );
};

export default CategoryCard;
