import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

interface Article {
  id: number;
  title: string;
  content: string;
}

const ArticleManager = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [feedback, setFeedback] = useState("");
  const navigate = useNavigate();

  const addArticle = (newArticle: Article) => {
    const articles: Article[] = JSON.parse(
      localStorage.getItem("articles") || "[]"
    );
    articles.push(newArticle);
    localStorage.setItem("articles", JSON.stringify(articles));
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setContent(event.target.value);
  };

  const validateData = () => {
    if (!title || !content) {
      setFeedback("Wypełnij wszystkie pola!");
    } else {
      addArticle({ id: setId(), title: title, content: content });
      setFeedback("Dodano pomyślnie.");
      setTitle("");
      setContent("");

      navigate("/blog");
    }
  };

  const setId = () => {
    const articles: Article[] = JSON.parse(
      localStorage.getItem("articles") || "[]"
    );
    const maxId =
      articles.length > 0 ? Math.max(...articles.map((a) => a.id)) : 0;
    return maxId + 1;
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Dodaj swój artykuł!</h1>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Tytuł artykułu
        </label>
        <input
          id="title"
          type="text"
          onChange={handleTitleChange}
          value={title}
          className="form-control"
          placeholder="Tytuł artykułu..."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="content" className="form-label">
          Treść artykułu
        </label>
        <textarea
          id="content"
          onChange={handleContentChange}
          value={content}
          className="form-control"
          placeholder="Treść artykułu..."
          rows={8}
        />
      </div>

      <button className="btn btn-primary" onClick={validateData}>
        Dodaj
      </button>

      <div className="mt-2">
        <Link to={"/"} className="btn btn-secondary">
          Powrót do strony głównej
        </Link>
      </div>

      {feedback && (
        <div
          className={`mt-3 alert ${
            feedback === "Dodano pomyślnie." ? "alert-success" : "alert-danger"
          }`}
          role="alert"
        >
          {feedback}
        </div>
      )}
    </div>
  );
};

export default ArticleManager;
