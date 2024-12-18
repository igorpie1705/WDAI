import Produkt from "./Produkt";

function Koszyk() {
  return (
    <div>
      <h2>Mój Koszyk</h2>
      <Produkt nazwa="Jabłko" />
      <Produkt nazwa="Gruszka" />
      <Produkt nazwa="Banan" />
      <Produkt nazwa="Pomarańcza" />
      <Produkt nazwa="Kiwi" />
    </div>
  );
}

export default Koszyk;
