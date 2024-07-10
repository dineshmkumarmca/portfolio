import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Journey from "./components/Journey/journey";
import Footer from "./components/Footer/footer";
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Intro/>
     <Skills/>
     <Journey/>
     <Footer/>

    </div>
  );
}

export default App;
