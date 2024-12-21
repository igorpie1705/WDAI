import React, { useState } from "react";

function Formularz() {
  const [text, setText] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h2>Formularz</h2>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Wpisz tekst..."
      />
      <div>{text || "Tutaj będzie tekst..."}</div>
    </div>
  );
}

export default Formularz;
