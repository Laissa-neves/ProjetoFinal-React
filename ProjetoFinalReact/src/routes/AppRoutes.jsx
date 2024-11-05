import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Add from "../pages/Add";
import Modify from "../pages/Modify";
import Search from "../pages/Search";
import Error from "../pages/Error";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/adicionar" element={<Add />}></Route>
      <Route path="/modificar/:id" element={<Modify />}></Route>
      <Route path="/buscar" element={<Search />}></Route>
      <Route path="*" element={<Error />}></Route>
    </Routes>
  );
}
