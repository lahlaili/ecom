import './App.css';
import Hero from './hero/Hero';
import Navbar from './navbar/Navbar';
import TrItems from './trItems/TrItems'
import RService from './RServices/RService';
import Panels from './Panels/Panels';
import TopItem from './TopItem/TopItem';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Panels/>
      <TrItems/>
      <RService/>
      <TopItem/>
    </div>
  );
}

export default App;
