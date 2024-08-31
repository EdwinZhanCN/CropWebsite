import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from "react";
import "@/style/Root.css";
import router from "@/router";
import Header from "@/components/general-components/Header";
import Footer from "@/components/general-components/Footer";

/**
 * This is the main component that contains the header, footer, and the routes
 * @returns {Element}
 * @constructor
 */
function App() {
  return (
      <Router>
          <Header />
          <Routes>
              {router.map((route, index) => (
                  <Route key={index} path= {route.path} element= {route.element} />
              ))}
          </Routes>
          <Footer />
      </Router>
  );
}

export default App;
