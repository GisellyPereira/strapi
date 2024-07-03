"use client";
import React from "react";
import { BrowserRouter, Route, Router  } from "react-router-dom/cjs/react-router-dom.min";
import Home from "../pages/home"


export default function Page() {




  return (
  
      <BrowserRouter>
        <Route path="/" component={Home} />
      </BrowserRouter>
  
   
  );
}
