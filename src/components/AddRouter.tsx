import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Details from "./Details";
import Product from "./Product";


function AddRouter() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<App />} />
          <Route path="product" element={<Product />} />
          <Route path="details" element={<Details/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default AddRouter;
