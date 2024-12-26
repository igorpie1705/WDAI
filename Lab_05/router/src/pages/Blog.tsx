import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Article {
  id: number;
  title: string;
  content: string;
}

const Blog = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const storedArticles: Article[] = JSON.parse(
      localStorage.getItem("articles") || "[]"
    );
    setArticles(storedArticles);
  }, []);

  return (
    <div>
      <h1>Tytuły naszych artykułów...</h1>
      <ul className="list-group">
        {articles.map((article) => (
          <li className="list-group-item" key={article.id}>
            <Link
              to={`/article/${article.id}`}
              className="text-decoration-none"
            >
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
      <Link to={"/"} className="btn btn-secondary mt-3">
        Powrót do strony głównej
      </Link>
    </div>
  );
};

export default Blog;
