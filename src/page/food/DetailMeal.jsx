import React, { Suspense, useEffect, useState } from "react";
const MealImage = React.lazy(() => import("../../component/MealImage"));
import { useParams } from "react-router-dom";

const MealDetail = () => {
  const [dataDetailMeal, setDataDetailMeal] = useState([]);
  const param = useParams();
  const getDetailMeal = async () => {
    await fetch(
      "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + param.id
    )
      .then((response) => response.json())
      .then((data) => {
        setDataDetailMeal(data.meals);
      })
      .catch((e) => console.log(e.message));
  };
  useEffect(() => {
    getDetailMeal();
  }, []);
  return (
    <>
      {dataDetailMeal.map((data, i) => {
        return (
          <div key={i} className="container mx-auto px-5 overflow-hidden">
            <Suspense fallback={<div>Loading...</div>}>
              <header className="py-5 border-b-2">
                <h1 className="text-4xl font-semibold">{data.strMeal}</h1>
              </header>
              <section
                id="area-and-category"
                className="text-red-500 font-semibold "
              >
                <p>Tags : {data.strTags}</p>
                <p>Area : {data.strArea}</p>
                <p>Category : {data.strCategory}</p>
              </section>
              <section id="image-and-instruction">
                <MealImage src={data.strMealThumb} alt={data.strMeal} />
                <h2 className="text-2xl font-semibold py-2">Instruction</h2>
                <p>{data.strInstructions}</p>
              </section>
              <section id="recipes">
                <h2 className="text-2xl font-semibold py-2">Recipes</h2>
                <div className="flex">
                  <ul className="list-inside list-disc px-5">
                    <ListRecipes data={data.strIngredient1} />
                    <ListRecipes data={data.strIngredient2} />
                    <ListRecipes data={data.strIngredient3} />
                    <ListRecipes data={data.strIngredient4} />
                    <ListRecipes data={data.strIngredient5} />
                    <ListRecipes data={data.strIngredient6} />
                    <ListRecipes data={data.strIngredient7} />
                    <ListRecipes data={data.strIngredient8} />
                    <ListRecipes data={data.strIngredient9} />
                    <ListRecipes data={data.strIngredient10} />
                  </ul>
                  <ul className="list-inside list-disc px-5">
                    <ListRecipes data={data.strIngredient11} />
                    <ListRecipes data={data.strIngredient12} />
                    <ListRecipes data={data.strIngredient13} />
                    <ListRecipes data={data.strIngredient14} />
                    <ListRecipes data={data.strIngredient15} />
                    <ListRecipes data={data.strIngredient16} />
                    <ListRecipes data={data.strIngredient17} />
                    <ListRecipes data={data.strIngredient18} />
                    <ListRecipes data={data.strIngredient19} />
                    <ListRecipes data={data.strIngredient20} />
                  </ul>
                </div>
              </section>
              <section
                id="video-youtube"
                className="flex flex-col items-center"
              >
                <h2 className="text-2xl font-semibold py-4">
                  Tutorial to Make <b>{data.strMeal}</b>
                </h2>
                <iframe
                  className="w-[20rem] h-[18rem] md:w-[45rem] md:h-[35rem]"
                  src={data.strYoutube.replace(
                    "https://www.youtube.com/watch?v=",
                    "https://www.youtube.com/embed/"
                  )}
                  title={data.strMeal}
                />
              </section>
            </Suspense>
          </div>
        );
      })}
    </>
  );
};

export default MealDetail;
export const ListRecipes = ({ data }) => {
  return data != "" && <li>{data}</li>;
};
