import "./App.css";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Home from "./components/home/home";
import Billing from "./components/billing/billing";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Link } from "react-router-dom";
const initialState = {
  items: [
    {
      name: "Bread",
      price: 100,
      count: 0,
      totalPrice: 0,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYK6898aGfTCEe92ttYmZqzAvoGKHMU6uMyw&usqp=CAU",
      savingsPrice: 0,
      offerPrice: 0,
    },
    {
      name: "Milk",
      price: 50,
      count: 0,
      totalPrice: 0,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAe_rldgZp3QEtdtIsBNwhr4m22MsfCRq1R-IP-HGSijzxMHE&s",
      savingsPrice: 0,
      offerPrice: 0,
    },
    {
      name: "Cheese",
      price: 90,
      count: 0,
      totalPrice: 0,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJUZkAYJ2aOeUKjc6VZmYeguueUfAr7VyWAwqbbg9Mb2KmrjY&s",
      savingsPrice: 0,
      offerPrice: 0,
    },
    {
      name: "Soup",
      price: 60,
      count: 0,
      totalPrice: 0,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfG7mlw6B7kQVEUZZOnyQXTqCW6C3WNxeqwR2vikE8unbVP5o&s",
      savingsPrice: 0,
      offerPrice: 0,
    },
    {
      name: "Butter",
      price: 200,
      count: 0,
      totalPrice: 0,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS9cnZ3UR5RGupm6UIpX_1bSRzNfuLZsBjGcaGcpUXxrz1VbNo&s",
      savingsPrice: 0,
      offerPrice: 0,
    },
  ],
};

function App() {
  const dispatch = useDispatch();
  dispatch({ type: "INITIALIZE", payload: initialState });

  return (
    <div className="d-flex justify-content-around">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/billing" element={<Billing />} />
      </Routes>
    </div>
  );
}

export default App;
