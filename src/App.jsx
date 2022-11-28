import './App.css';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
// import News from './components/News';
import Nav from './components/Nav';
import Featured_Players from './components/Featured_Players';

function App() {
  return (
    <div className="App">
      <Nav />
      <Featured_Players />
      <section>
      </section>

      <section>
        <Footer />
      </section>

    </div>
  );
}

export default App;
