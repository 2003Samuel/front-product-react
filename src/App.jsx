import { Route, Routes } from "react-router";
import { ListProduct } from "./pages/ListProduct";
import { NewProduct } from "./pages/NewProduct";
import { NotFound } from "./pages/NotFound";
import { NavBar } from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<ListProduct />} />
        <Route path="/new" element={<NewProduct />} />
        <Route path="/edit/:id" element={<NewProduct />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <div className="etName badge text-bg-dark py-1">
        <span>Samuel Mosquera</span>
      </div>
    </>
  );
}

export default App;
