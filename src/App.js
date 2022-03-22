import logo from "./logo.svg";
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
  // array having group of objects with product details

  const dispatch = useDispatch();
  useState(() => {
    dispatch({ type: "INITIALIZE", payload: initialState });
  }, []);
  //const [items] = useState(useSelector((state) => state.items));

  //let [details, setDetails] = useState(items);
  // let [count, setCount] = useState(0);

  // function written to increment the quantity of products
  // function increment(i) {
  //   details[i].count = details[i].count + 1;
  //   const action = {
  //     type: "INCREMENT",
  //     payload: { details },
  //   };
  //   dispatch(action);
  // }

  //function written to decrement the quantity of products
  // function decrement(i) {
  //   if (details[i].count) {
  //     details[i].count = details[i].count - 1;
  //     setDetails(details);
  //     setCount((count = count + 1));
  //   }
  // }

  return (
    <div className="d-flex justify-content-around">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/billing" element={<Billing />} />
      </Routes>

      {/* <Link to="/billing">Billing</Link> */}

      {/* <Header /> */}
    </div>
  );
}

export default App;
