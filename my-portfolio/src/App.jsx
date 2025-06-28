import Navbar from "./components/Navbar/Navbar";
import "./App.css"; 
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Skills />
      <Experience />
      <Contact />
      {/* Your other sections */}
    </>
  );
}
export default App;
