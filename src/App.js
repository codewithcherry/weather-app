import "./App.css";
import WeatherHead from "./Components/WeatherHead";



function App() {
  return (
    <div className="bg-background m-0 bg-cover">
      
      <div className="m-0 p-4 shadow-lg border-slate-800">
      <h1 className="text-slate-400 text-2xl">Weather App</h1>
      </div>
      <div>
        <WeatherHead />
      </div>
    </div>
  );
}

export default App;
