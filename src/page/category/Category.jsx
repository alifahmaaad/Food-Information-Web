import React, { Suspense, useEffect, useState } from "react";
const CategoryCard = React.lazy(() => import("../../component/CategoryCard"));

const Category = () => {
  const [dataCategories, setDataCategories] = useState([]);
  const getCategory = async () => {
    await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => response.json())
      .then((data) => {
        setDataCategories(data.categories);
      })
      .catch((e) => alert(e.message));
  };
  useEffect(() => {
    getCategory();
  }, []);
  return (
    <div>
      <header className="flex flex-col items-center justify-center px-4 py-[5rem] bg-gray-200">
        <h1 className="text-4xl text-gray-700 font-bold">
          See All The Delicious Foods
        </h1>
        <h2>Meal API website</h2>
      </header>

      <section id="categories" className="container mx-auto ">
        <ul className="gap-3 px-4 py-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-items-center ">
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
