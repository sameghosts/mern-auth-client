import './App.css';
import Content from './components/Content';
import Header from './components/partials/Header';

function App() {
  return (
    <div className="App">
      {/* TODO: remove this div and style more intentionally */}
      <Header />
      <Content />
    </div>
  );
}

export default App;
