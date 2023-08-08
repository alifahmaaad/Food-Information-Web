const LoadingCompCategoryCard = () => {
  return (
    <div className="card w-[15rem] relative z-1 rounded-xl shadow-xl p-3 mt-[7rem] bg-gray-100 ">
      <figure className="">
        <img className="rounded-full aspect-square object-cover shadow-lg  w-full h-full -mt-[7rem] bg-gray-500 animate-pulse" />
        <figcaption className="font-extrabold text-lg py-2 flex flex items-center justify-center">
          <p className=" h-full w-[50%] rounded-full h-7 bg-gray-500 animate-pulse" />
        </figcaption>
      </figure>
      <div className="gap-3 flex flex-col">
        <div className="rounded-full h-5 bg-gray-500 animate-pulse" />
        <div className="rounded-full h-5 bg-gray-500 animate-pulse" />
        <div className="rounded-full h-5 bg-gray-500 animate-pulse w-[80%]" />
      </div>
    </div>
  );
};

export default LoadingCompCategoryCard;
