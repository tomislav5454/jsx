import './App.css';








function App() {

const nesto = ["JavaScript"];
const nesto2 = "React";

  return ( <div className="App">
    <p>MORAMO PUNO VJEZBATI</p>
    <p> idemo vjezbati: {nesto}</p>
    <p>Mojo omiljeni programi su: {nesto.map((i) => i + " ")} i {nesto2}</p>
  </div>
  )
}

export default App;
