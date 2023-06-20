import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailCategory = () => {
  const params = useParams();
  const [dataDetail, setDataDetail] = useState([]);
  const getDetailCategory = async () => {
    await fetch(
      "http://www.themealdb.com/api/json/v1/1/filter.php?c=" +
        params.categoryName
    )
      .then((response) => response.json())
      .then((data) => {
        setDataDetail(data.meals);
        console.log(data.meals);
      })
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    getDetailCategory();
  }, []);
  return (
    <div className="container mx-auto">
      <ul>
        {dataDetail.map((data, i) => {
          return <li key={i}>{data.strMeal}</li>;
        })}
      </ul>
    </div>
  );
};

export default DetailCategory;
