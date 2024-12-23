import { useState } from "react";

type AddProps = {
  onAddStudent: (student: {
    imie: string;
    nazwisko: string;
    rocznik: number;
  }) => void;
};

const Dodawanie: React.FC<AddProps> = ({ onAddStudent }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [year, setYear] = useState("");
  const [error, setError] = useState("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSurnameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSurname(event.target.value);
  };

  const handleYearChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setYear(event.target.value);
  };

  const validateData = () => {
    if (!name || !surname || !year) {
      setError("Nie podano wszystkich danych");
      return;
    }
    const yearNumeric = Number(year);
    if (isNaN(yearNumeric)) {
      setError("Rok musi być liczbą");
      return;
    }
    onAddStudent({ imie: name, nazwisko: surname, rocznik: yearNumeric });

    setError("");
    console.log("Dodano użytkownika:", { name, surname, year: Number(year) });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>Dodaj użytkownika</h1>
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Imie"
      />
      <input
        type="text"
        value={surname}
        onChange={handleSurnameChange}
        placeholder="Nazwisko"
      />
      <input
        type="text"
        value={year}
        onChange={handleYearChange}
        placeholder="Rok urodzenia"
      />
      <button type="button" onClick={validateData}>
        Dodaj
      </button>
      <div>{error}</div>
    </div>
  );
};

export default Dodawanie;
