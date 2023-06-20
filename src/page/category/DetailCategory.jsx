import React, { Suspense, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const MealCard = React.lazy(() => import("../../component/MealCard"));
const DetailCategory = () => {
  const params = useParams();
  const [dataDetail, setDataDetail] = useState([]);
  const getDetailCategory = async () => {
    await fetch(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=" +
        params.categoryName
    )
      .then((response) => response.json())
      .then((data) => {
        setDataDetail(data.meals);
      })
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    getDetailCategory();
  }, []);
  return (
    <div className="container mx-auto">
      <header className="flex w-full py-5 items-center justify-center border-b-4">
        <h1 className="text-4xl font-bold">
          Food Category : {params.categoryName}
        </h1>
      </header>
      <section>
        <ul className="gap-3 px-4 py-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-items-center ">
          {dataDetail.map((data, i) => {
            return (
              <li key={i}>
                <Suspense fallback={<div>Loading...</div>}>
                  <MealCard
                    src={data.strMealThumb}
                    alt={data.strMeal}
                    id={data.idMeal}
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

export default DetailCategory;
