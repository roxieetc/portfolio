import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Hero from './Components/Hero';
import Projects from './Components/Projects';
import Contact from './Components/Contact';


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
