import Produkt from "./Produkt";

function NowyKoszyk() {
  const Produkty = ["Jabłko", "Gruszka", "Banan", "Pomarańcza", "Kiwi"];

  return (
    <div>
      <h2>Mój Nowy Koszyk</h2>
      {Produkty.map((nazwa, index) => (
        <Produkt key={index} nazwa={nazwa} />
      ))}
    </div>
  );
}

export default NowyKoszyk;
