interface ProduktProps {
  nazwa: string;
}

function Produkt({ nazwa }: ProduktProps) {
  return <p>Produkt: {nazwa}</p>;
}

export default Produkt;
