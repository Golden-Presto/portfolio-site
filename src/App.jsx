import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Projects from './sections/Projects';
import Resume from './sections/Resume';
import Contact from './sections/Contact';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Projects />
        <Resume />
        <Contact />
      </main>
    </>
  );
}

export default App;