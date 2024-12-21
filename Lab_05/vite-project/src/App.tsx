import "./App.css";
import Logowanie from "./components/formularze/Logowanie";
import Aktualizacja from "./components/inne/Aktualizacja";
import Licznik from "./components/liczniki/Licznik";

function App() {
  return (
    <div>
      <h1>Moja Aplikacja</h1>
      <Logowanie />
      <Licznik />
      <Aktualizacja />
    </div>
  );
}

export default App;
