import { useState } from "react";
import Przycisk from "./Przycisk";

function NowyLicznik() {
  const [licznik, setLicznik] = useState(0);

  const dodaj = () => {
    setLicznik(licznik + 1);
  };

  return (
    <div>
      <h2>Licznik</h2>
      <p>Wartość licznika: {licznik}</p>
      <Przycisk onClick={dodaj} />
    </div>
  );
}

export default NowyLicznik;
