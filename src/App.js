import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import About from './Pages/About/About';
import Intro from './Pages/Intro/Intro';
import Roadmap from './Pages/Roadmap/Roadmap';
import Team from './Pages/Team/Team';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <About />
      <Team />
      <Roadmap />
      <Footer />
    </div>
  );
}

export default App;
