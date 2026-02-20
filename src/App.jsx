import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./layouts/UserLayout";
import AdminLayout from "./layouts/AdminLayout";
import OrderList from "./Pages/OrderList";
import Navbar from "./Component/Navbar";
import LayoutPg from "./Pages/LayoutPg";
import ProductsPg from "./Pages/ProductsPg";
import Footer from "./Component/Footer";
import AdminApp from "./AdminApp";
import AdminLogin from "./Pages/admin/AdminLogin";
import OrderFormPg from "./Pages/OrderFormPg";
import CustomizeOrderPG from "./Pages/CustomizeOrderPg";
import { Analytics } from '@vercel/analytics/react';



function App() {
  return (<>
      
     <Routes>
      <Route element={<UserLayout/>}>
      <Route path="/" element={<LayoutPg/>}></Route>
      <Route path="/list" element={<OrderList/>}></Route>
      <Route path="/orderForm" element={<OrderFormPg/>}></Route>
      <Route path="/products" element={<ProductsPg/>}></Route>
      <Route path="/customizeOrder" element={<CustomizeOrderPG/>}></Route>

      </Route>


      <Route element={<AdminLayout/>}>
      <Route path="/admin" element={<AdminLogin/>}></Route>
      <Route path="/admindashboard" element={<AdminApp/>}></Route>
      </Route>
     
    </Routes>
    <Analytics />
  </>);
}

export default App;
