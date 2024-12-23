import { useEffect, useState } from "react";

function Licznik() {
  const [licznik, setLicznik] = useState(0);

  const dodaj = () => {
    setLicznik(licznik + 1);
  };

  useEffect(() => {
    console.log(`Licznik zwiększył się do ${licznik}`);
  }, [licznik]);

  useEffect(() => {
    console.log("Hello world");
  }, []);

  return (
    <div>
      <h2>Licznik</h2>
      <p>Wartość licznika: {licznik}</p>
      <button onClick={dodaj}>Kliknij</button>
    </div>
  );
}

export default Licznik;
