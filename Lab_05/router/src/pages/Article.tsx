import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

interface Article {
  id: number;
  title: string;
  content: string;
}

const Article = () => {
  const { id } = useParams();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    if (id) {
      const storedArticles: Article[] = JSON.parse(
        localStorage.getItem("articles") || "[]"
      );
      const foundArticle = storedArticles.find((a) => a.id === parseInt(id));
      setArticle(foundArticle || null);
    }
  }, [id]);

  if (!article) {
    return (
      <div className="text-center mt-4">
        <h1>Artykuł nie został znaleziony.</h1>
      </div>
    );
  }

  return (
    <Container className="mt-5">
      <Row>
        <Col md={8} className="mx-auto">
          <div className="card shadow-sm">
            <div className="card-body">
              <h1 className="card-title text-break">{article.title}</h1>

              <p className="card-text">{article.content}</p>
              <Link to="/blog" className="btn btn-primary">
                Powrót do bloga
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Article;
