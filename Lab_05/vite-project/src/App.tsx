import "./App.css";
import Formularz from "./components/formularze/Formularz";
import Haslo from "./components/formularze/Haslo";
import Logowanie from "./components/formularze/Logowanie";
import Aktualizacja from "./components/inne/Aktualizacja";
import Ternary from "./components/inne/Ternary";
import Koszyk from "./components/koszyk/Koszyk";
import NowyKoszyk from "./components/koszyk/NowyKoszyk";
import Produkt from "./components/koszyk/Produkt";
import Licznik from "./components/liczniki/Licznik";
import NowyLicznik from "./components/liczniki/NowyLicznik";
import Przycisk from "./components/liczniki/Przycisk";
import Komentarze from "./components/produkty/Komentarze";
import Dodawanie from "./components/studenci/Dodawanie";
import Studenci from "./components/studenci/Studenci";
import StudentManager from "./components/studenci/StudentManager";

function App() {
  return (
    <div>
      <h1>Moja Aplikacja</h1>
      <Formularz />
      <Haslo />
      <Aktualizacja />
      <Ternary />
      <Koszyk />
      <NowyKoszyk />
      <Licznik />
      <NowyLicznik />
      <Studenci />
      <Logowanie />
      <Licznik />
      <Aktualizacja />
      <Studenci />
      <StudentManager />
      <Komentarze />
    </div>
  );
}

export default App;
