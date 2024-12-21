import React, { useState } from "react";

function Haslo() {
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState("");

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleRepeatedPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRepeatPassword(event.target.value);
  };

  const validatePasswords = () => {
    if (!password || !repeatPassword) {
      setError("Proszę wprowadzić hasło");
    } else if (password != repeatPassword) {
      setError("Hasła nie są zgodne");
    } else {
      setError("");
    }
  };

  React.useEffect(() => {
    validatePasswords();
  }, [password, repeatPassword]);

  return (
    <div>
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Podaj hasło..."
      />
      <input
        type="password"
        value={repeatPassword}
        onChange={handleRepeatedPasswordChange}
        placeholder="Wpisz hasło ponownie..."
      />
      <div>{error}</div>
    </div>
  );
}

export default Haslo;
