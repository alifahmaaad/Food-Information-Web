import { BrowserRouter, Route, Routes } from "react-router-dom";
import NoPage from "./component/NoPage";
import NavbarComp from "./component/Navbar";
import Category from "./page/category/Category";

function App() {
  return (
    <div className="App flex flex-col">
      <NavbarComp />
      <div className="flex-1 pt-[4.5em] pb-4 w-full">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Category />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
