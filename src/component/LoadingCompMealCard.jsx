const LoadingCompMealCard = () => {
  return (
    <div className="card  relative z-1 ">
      <div className="w-[15rem] h-[15rem] absolute border-2 rounded-xl shadow-lg border-[#FFB100] -z-10 ml-3 mt-3 " />
      <figure className="bg-gray-500 rounded-xl animate-pulse">
        <img className="rounded-lg w-[15rem] h-[15rem] object-contain" />
      </figure>
    </div>
  );
};

export default LoadingCompMealCard;
