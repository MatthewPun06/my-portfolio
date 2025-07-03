import React, { useState } from 'react';
import Home from './pages/Home.js';
// import About from './pages/About';

function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    switch (currentPage) {
      case "Home":
        return <Home setCurrentPage={setCurrentPage} />;
      case "About":
        // return <About setCurrentPage={setCurrentPage} />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div>
      {renderPage()}
    </div>
  );
}

export default App;