type PrzyciskProps = {
  onClick: () => void;
};

function Przycisk({ onClick }: PrzyciskProps) {
  return <button onClick={onClick}>Kliknij</button>;
}

export default Przycisk;
