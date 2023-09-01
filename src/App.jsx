import React from "react";
import "./App.css";
import Header from "./components/Header";
import Inputs from "./components/Inputs";
import Cards from "./components/Cards";
import { ThemaContex } from "./ThemaContex";
import { CountriesContextProvider } from "./CountrieContex";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Countrie from "./components/Countrie";

const App = () => {
  const { thema } = React.useContext(ThemaContex);
  return (
    <BrowserRouter>
      <div className={thema == "light" ? "App" : "AppDark"}>
        <CountriesContextProvider>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Inputs />
                  <Cards />
                </>
              }
            />
            <Route path="/pais/:cod" element={<Countrie />} />
          </Routes>
        </CountriesContextProvider>
      </div>
    </BrowserRouter>
  );
};

export default App;
