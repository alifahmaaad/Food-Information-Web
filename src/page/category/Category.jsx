import React, { Suspense, useEffect, useState } from "react";
import MainMeal from "../../component/MainMeal";
const CategoryCard = React.lazy(() => import("../../component/CategoryCard"));

const Category = () => {
  const [dataCategories, setDataCategories] = useState([]);
  const [randMeal, setRandMeal] = useState(null);
  const getCategory = async () => {
    await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => response.json())
      .then((data) => {
        setDataCategories(data.categories);
      })
      .catch((e) => alert(e.message));
  };
  const getOneRandomMeal = async () => {
    await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.meals);
        setRandMeal(data.meals);
      })
      .catch((e) => alert(e.message));
  };
  useEffect(() => {
    getCategory();
    getOneRandomMeal();
  }, []);
  return (
    <div>
      <header className="flex flex-col md:flex-row items-center justify-center px-4 py-10 md:my-10 bg-gray-100 container m-auto rounded-xl md:px-20">
        <div className="pb-10 md:pb-0">
          <h1 className="text-3xl md:text-5xl font-bold py-2">
            It's not just a Food, It's an Experience.
          </h1>
          <h2>The Meal API website.</h2>
        </div>
        {randMeal != null && <MainMeal meal={randMeal[0]} />}
      </header>

      <section id="categories" className="container mx-auto">
        <div className="text-2xl font-bold py-10 px-10">Food Category.</div>
        <ul className="gap-5 px-4 py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-items-center ">
          {dataCategories.map((data, i) => {
            return (
              <li key={i}>
                <Suspense fallback={<div>Loading....</div>}>
                  <CategoryCard
                    key={i}
                    src={data.strCategoryThumb}
                    alt={data.strCategoryDescription}
                    caption={data.strCategory}
                  />
                </Suspense>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default Category;
