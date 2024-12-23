import React, { useEffect, useState } from "react";
import Komentarz from "./Komentarz";

interface User {
  id: number;
  username: string;
  fullName: string;
}

interface Comment {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: User;
}

const Komentarze: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("https://dummyjson.com/comments")
      .then((response) => response.json())
      .then((data) => {
        setComments(data.comments);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Błąd podczas pobierania danych:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Ładowanie komentarzy...</div>;
  }

  return (
    <div>
      {comments.map((comment) => (
        <Komentarz
          key={comment.id}
          id={comment.id}
          body={comment.body}
          postId={comment.postId}
          likes={comment.likes}
          user={comment.user}
        />
      ))}
    </div>
  );
};

export default Komentarze;
