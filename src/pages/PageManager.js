import HomePage from './Home.tsx';

// Define the PageName shape directly
const PageName = {
  HOME: "home", // or any value you want
  ABOUT: "about",
  PROJECTS: "projects",
  CONTACT: "contact",
  MYRIA: "myria",
  RESUME: "resume",
};

var currentPage = PageName.HOME; // Initialize currentPage with a valid key from PageName

export default function PageManager() {
  if (currentPage === PageName.HOME) {
    return (
      HomePage()
    );
  }
}