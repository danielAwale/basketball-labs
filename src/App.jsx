import './App.css';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import News from './components/News';
import Stats from './components/Stats';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Stats />
      <News />
      <Footer />
    </div>
  );
}

export default App;
