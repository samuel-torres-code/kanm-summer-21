import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./containers/Home";

export default function Router() {
  return (
    <Routes>
      <Route path="/" component={Home}/>
    </Routes>
  );
}
