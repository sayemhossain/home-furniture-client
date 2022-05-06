import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home/Home";
import Products from "./components/Home/Products/Products";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import AllFurniture from "./components/AllFurniture/AllFurniture";
import Inventory from "./components/Inventory/Inventory";
import RequireAuth from "./components/RequireAuth/RequireAuth";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/allfurniture"
          element={<AllFurniture></AllFurniture>}
        ></Route>
        <Route
          path="/furnitures/:furnitureId"
          element={
            <RequireAuth>
              <Inventory></Inventory>
            </RequireAuth>
          }
        ></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
