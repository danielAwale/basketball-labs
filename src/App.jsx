import './App.css';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import News from './components/News';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section>
      <News />
      </section>

      <section>
        <Footer />
      </section>

    </div>
  );
}

export default App;
