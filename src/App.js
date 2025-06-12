import "./App.css";
import { BrowserRouter, Route, Link, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/NavLinks/Home.js";
import ShoppingCart from "./components/ShoppingCart.js";
import Contact from "./components/NavLinks/Contact.js";
import About from "./components/NavLinks/About.js";
import Book from "./components/NavLinks/Book.js";
import SignIn from "./components/SignIn.js";
import Shop from "./components/NavLinks/Shop.js";
import Admin from "./components/admin/Admin.js";
import AdminDashboard from "./components/admin/DashboardPage.js";
import StatsCard from "./components/admin/SidebarComponents/StatsCard.js"; 
import OrdersTable from "./components/admin/SidebarComponents/OrdersTable.js";
import UsersTable from "./components/admin/SidebarComponents/UsersTable.js";
import ProductsChart from "./components/admin/SidebarComponents/ProductsChart.js";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book" element={<Book />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/admin/*" element={<Admin />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
