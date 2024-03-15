import './App.css';
import BubbleChart from './BubbleChart';
import data from './erica.json';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bubble Chart Visualization</h1>
        <BubbleChart data={data} />
      </header>
    </div>
  );
}

export default App;
