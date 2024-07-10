import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Home from "./components/Home";
import Service from "./components/Service";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  return (
    <div>
     <Header/>
     <Home/>
     <About/>
     <Experience/>
     <Skills/>
     <Work/>
     {/* <Service/> */}
     <Contact/>
    </div>
  );
};


export default App;
