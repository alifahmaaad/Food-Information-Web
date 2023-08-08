import { Route, Routes } from "react-router-dom";
import NoPage from "./component/NoPage";
import NavbarComp from "./component/Navbar";
import Category from "./page/category/Category";
import DetailCategory from "./page/category/DetailCategory";
import MealDetail from "./page/food/DetailMeal";
import Footer from "./component/Footer";
import { useEffect, useState } from "react";

function App() {
  const [isTop, setIsTop] = useState(true);
  const checkTop = () => {
    if (window.scrollY === 0) setIsTop(true);
    else setIsTop(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", checkTop);
  });
  return (
    <div className="App flex flex-col">
      <NavbarComp />
      <div className="flex-1 pt-[4.5em] pb-4 w-full">
        <Routes>
          <Route path="/" element={<Category />} />
          <Route
            path="category/detail/:categoryName"
            element={<DetailCategory />}
          />
          <Route path="foods/detail/:id" element={<MealDetail />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <div
          className={
            (isTop ? "invisible " : "visible bg-[#FFB100]") +
            " fixed w-[4rem] h-[4rem]  bottom-7 right-7 rounded-full flex items-center justify-center hover:animate-pulse cursor-pointer transition duration-700 ease-in-out "
          }
          onClick={() => window.scrollTo(0, 0)}
        >
          <i className="h-5 w-5 border-t-4 border-l-4 rotate-45 mt-2 " />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
