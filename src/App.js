import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import About from './Pages/About/About';
import Intro from './Pages/Intro/Intro';
import Roadmap from './Pages/Roadmap/Roadmap';
import Sneak from './Pages/Sneak/Sneak';
import Team from './Pages/Team/Team';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <About />
      <Roadmap />
      <Sneak />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
