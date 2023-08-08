import { Route, Routes } from "react-router-dom";
import NoPage from "./component/NoPage";
import NavbarComp from "./component/Navbar";
import Category from "./page/category/Category";
import DetailCategory from "./page/category/DetailCategory";
import MealDetail from "./page/food/DetailMeal";
import Footer from "./component/Footer";

function App() {
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
      </div>
      <Footer />
    </div>
  );
}

export default App;
