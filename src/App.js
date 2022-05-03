import './App.css';
import Header from './Components/Header/Header';
import About from './Pages/About/About';
import Intro from './Pages/Intro/Intro';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <About />
    </div>
  );
}

export default App;
