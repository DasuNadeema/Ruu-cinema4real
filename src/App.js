import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import Movie from "./component/Movie";
import Main from "./component/Main";
import Schedule from "./component/Schedule";
import Card from "./component/Card";
import Tv from "./component/Tv";
import React from "react";
import Footer from "./component/Footer";
import HomePage from "./pages/HomePage";
import { createBrowserRouter, RouterProvider, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewPage from "./pages/NewPage";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/NewPage" element={<NewPage />} />
      </Routes>
    </>
  );
}

export default App;
