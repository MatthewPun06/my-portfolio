import React, { useState } from 'react';
import Home from './Home.js';
import DevLog from './Devlog.js';
import Menu from './Menu.js';
import Contact from './ContactFooter.js';
import Resume from './Resume.js';
import ContactPage from './Contact.js'

export const PageName = {
  HOME: "home", // or any value you want
  PROJECTS: "projects",
  CONTACT: "contact",
  DEVLOG: "devlog",
  RESUME: "resume",
};

function App() {
  const [currentPage, setCurrentPage] = useState(PageName.HOME);
  const renderPage = (currentPage) => {
    switch (currentPage) {
      case PageName.RESUME:
        return <Resume setCurrentPage={setCurrentPage} />;
      case PageName.DEVLOG:
        return <DevLog setCurrentPage={setCurrentPage} />;
      // case PageName.CONTACT:
      //   return <ContactPage setCurrentPage = {setCurrentPage} />
      case PageName.HOME:
        return <Home setCurrentPage={setCurrentPage} />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div>
      <Menu setCurrentPage = {setCurrentPage}/>
      {renderPage(currentPage)}
      <Contact/>
    </div>
  );
}

export default App;