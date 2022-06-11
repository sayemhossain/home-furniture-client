import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home/Home";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import AllFurniture from "./components/AllFurniture/AllFurniture";
import Inventory from "./components/Inventory/Inventory";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import ManageInventory from "./components/ManageInventory/ManageInventory";
import AddItem from "./components/AddItem/AddItem";
import NotFound from "./components/NotFound/NotFound";
import MyItems from "./components/MyItems/MyItems";
import About from "./components/About/About";

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
          path="/inventory/:furnitureId"
          element={
            <RequireAuth>
              <Inventory></Inventory>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manage"
          element={
            <RequireAuth>
              <ManageInventory></ManageInventory>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/additem"
          element={
            <RequireAuth>
              <AddItem></AddItem>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/myitems"
          element={
            <RequireAuth>
              <MyItems></MyItems>
            </RequireAuth>
          }
        ></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
