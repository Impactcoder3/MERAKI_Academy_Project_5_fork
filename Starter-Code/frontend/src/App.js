import "./App.css";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import AdminDash from "./components/AdminDash";
import AdminCategory from "./components/AdminCategory";
import UserCategory from "./components/UserCategory/UserCategory";
import UserHomePage from "./components/userHomePage";
import Navbar from "./components/NavBar/index";
import OrderCreate from "./components/createOrder";
import CollectorsDash from "./components/CollectorsDash";
import CurrentCategory from "./components/UserCategory/CurrentCategory";
import GetAllRequest from "./components/UserCategory/GetAllRequest";
import SideNav from "./components/SideNav";
import Cart from "./components/Cart/index";  
import Glasses from "./components/CategorySections/Glasses";
import Copper from "./components/CategorySections/Copper";
import Paper from "./components/CategorySections/Paper";
import Food from "./components/CategorySections/Food";
import Iron from "./components/CategorySections/Iron";
import Furniture from "./components/CategorySections/Furniture";
import Wood from "./components/CategorySections/Wood";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminDash />} />
        <Route path="/category" element={<AdminCategory />} />
        <Route path="/categoriesPage" element={<UserCategory />} />
        <Route path="/collector" element={<CollectorsDash />} />
        <Route path="/currentCategory" element={<CurrentCategory />} />
        <Route path="/AllRequest" element={<GetAllRequest />} />
        <Route path="/cart" element={<Cart />} /> 
        <Route path="/category/Glasses" element={<Glasses />} />
        <Route path="/category/Copper" element={<Copper />} />
        <Route path="/category/Paper" element={<Paper />} />
        <Route path="/category/Food" element={<Food />} />
        <Route path="/category/Iron" element={<Iron />} />
        <Route path="/category/Furniture" element={<Furniture />} />
        <Route path="/category/Wood" element={<Wood />} />
        <Route path="/sideNav" element={<SideNav />} />
        <Route path="/Homepage" element={<UserHomePage />} />
      </Routes>
    </>
  );
};

export default App;
