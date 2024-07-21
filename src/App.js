import About from "./components/About";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Work from "./components/Work";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Work/>
      <Experience/>
    </div>
  );
}

export default App;
