import React, { Suspense, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingCompMealCard from "../../component/LoadingCompMealCard";
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
      <header className="flex w-full py-4 items-center px-20">
        <h1 className="text-4xl font-bold">
          Meals in <p className="text-[#FFB100]">{params.categoryName} </p>
          Category.
        </h1>
      </header>
      <section className="pb-20">
        <ul className="gap-10 px-4 py-5 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-items-center ">
          {dataDetail.map((data, i) => {
            return (
              <li key={i}>
                <Suspense fallback={<LoadingCompMealCard />} key={i}>
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
