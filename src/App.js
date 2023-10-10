import './App.css';
import Hero from './hero/Hero';
import Navbar from './navbar/Navbar';
import TrItems from './trItems/TrItems'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <TrItems/>
    </div>
  );
}

export default App;
