import { BrowserRouter, Route, Routes } from "react-router-dom";
import NoPage from "./component/NoPage";
import NavbarComp from "./component/Navbar";

function App() {
  return (
    <div className="App flex flex-col">
      <NavbarComp />
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
