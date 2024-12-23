import { useEffect, useState } from "react";

const Odliczanie = () => {
  const [licznik, setLicznik] = useState(15.0);
  const [buttonState, setButtonState] = useState("START");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleButtonChange = () => {
    if (buttonState === "START") {
      setButtonState("STOP");
    } else if (buttonState === "STOP") {
      setButtonState("START");
    }
  };
  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval> | null = null;

    if (buttonState === "STOP") {
      intervalId = setInterval(() => {
        setLicznik((prevLicznik) => {
          const newLicznik = Math.max(prevLicznik - 0.1, 0);
          return parseFloat(newLicznik.toFixed(1));
        });
      }, 100);
    } else {
      if (intervalId) clearInterval(intervalId);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [buttonState]);

  useEffect(() => {
    if (licznik <= 0) {
      setButtonState("Odliczanie zakończone");
      setIsButtonDisabled(true);
    }
  }, [licznik]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2>{licznik}s</h2>
      <button onClick={handleButtonChange} disabled={isButtonDisabled}>
        {buttonState}
      </button>
    </div>
  );
};

export default Odliczanie;
