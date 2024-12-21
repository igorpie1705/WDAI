import { useState } from "react";

function Aktualizacja() {
  const [state, setState] = useState({ nazwa: "Pomidor", cena: 50 });

  const updateState = () => {
    setState((prevState) => ({ ...prevState, cena: 100 }));
  };

  return (
    <div>
      <p>
        Mam w koszyczku: {state.nazwa}, o wartości {state.cena}
      </p>
      <button onClick={updateState}>Zaktualizuj cenę</button>
    </div>
  );
}

export default Aktualizacja;
