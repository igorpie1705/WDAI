import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mt-4">
      <h1 className="mb-4">Witaj na naszej stronie!</h1>
      <p>
        <Link to="/blog" className="btn btn-primary">
          Sprawdź nasz blog!
        </Link>
      </p>
      <p>
        <Link to="/dodaj" className="btn btn-secondary ml-2">
          Lub dodaj własny artykuł!
        </Link>
      </p>
    </div>
  );
};

export default Home;
