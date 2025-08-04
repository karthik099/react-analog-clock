import logo from './logo.svg';
import './App.css';
import AnalogClock from './AnalogClock';

function App() {
  return (
    <div className="App">
      {/* Analog Clock */}
      <h2 style={{ textAlign: "center" }}>Analog Clock</h2>
      <AnalogClock/>
    </div>
  );
}

export default App;
