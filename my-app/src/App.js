import "./styles.css";
import TodoList from "./TodoList";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";

export default function App() {
  const [language, setLanguage] = useState("en");
  const translations = {
    en: {
      madeBy: "Made by MindX ",
      availableOn: "Available on:",
    },
    vi: {
      madeBy: "Thực hiện bởi MindX ",
      availableOn: "Hỗ trợ ngôn ngữ:",
    },
  };
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              language={language}
              setLanguage={setLanguage}
              translations={translations}
            />
          }
        />
      </Routes>
      <Footer
        language={language}
        setLanguage={setLanguage}
        translations={translations}
      />
    </div>
  );
}

const Home = ({ language, setLanguage, translations }) => {
  return (
    <div className="App">
      <div className="container">
        <TodoList language={language} translations={translations} />
      </div>
    </div>
  );
};
