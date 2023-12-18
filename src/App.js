import './App.css';
import Bottone from './components/Button';
import Immagine from './components/Immagine';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Bottone name="Clicca"/>
      <Immagine source="https://www.buonenotizie.it/wp-content/uploads/2023/11/coding-scaled.jpg" />
      <Bottone name="Non cliccare"/>
      </header>
    </div>
  );
}

export default App;
