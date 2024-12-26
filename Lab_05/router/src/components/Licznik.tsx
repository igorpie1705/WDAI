import { useState } from "react";

function Licznik() {
  const [licznik, setLicznik] = useState(
    Number(localStorage.getItem("savedLicznik"))
  );

  const dodaj = () => {
    let nowyLicznik = licznik + 1;
    localStorage.setItem("savedLicznik", String(nowyLicznik));
    setLicznik(nowyLicznik);
  };

  return (
    <div>
      <h2>Licznik</h2>
      <p>Wartość licznika: {licznik}</p>
      <button onClick={dodaj}>Kliknij</button>
    </div>
  );
}

export default Licznik;
