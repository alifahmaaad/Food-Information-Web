import { useEffect, useState } from "react";

const MealDetail = () => {
  const [dataDetailMeal, setDataDetailMeal] = useState([]);
  const getDetailMeal = async () => {
    await fetch("http://www.themealdb.com/api/json/v1/1/lookup.php?i=52874")
      .then((response) => response.json())
      .then((data) => {
        setDataDetailMeal(data.meals);
        console.log(data.meals);
      })
      .catch((e) => console.log(e.message));
  };
  useEffect(() => {
    getDetailMeal();
  }, []);
  return (
    <>
      {dataDetailMeal.map((data, i) => {
        return <div key={i}>{data.strMeal}</div>;
      })}
    </>
  );
};

export default MealDetail;
