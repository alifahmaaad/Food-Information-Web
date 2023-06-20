const MealImage = ({ src, alt }) => {
  return (
    <>
      <figure className="float-none md:float-right p-4 w-[25rem]">
        <img className="rounded-xl" src={src} alt={alt} />
      </figure>
    </>
  );
};

export default MealImage;
