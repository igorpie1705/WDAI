import "./Komentarz.css";
import React, { useState } from "react";

interface User {
  id: number;
  username: string;
  fullName: string;
}

interface KomentarzProps {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: User;
}

const Komentarz: React.FC<KomentarzProps> = ({
  id,
  body,
  postId,
  likes: initialLikes,
  user,
}) => {
  const [updatedLikes, setLikes] = useState(initialLikes);
  const [userAction, setUserAction] = useState<"liked" | "disliked" | null>(
    null
  );

  const handleLikes = () => {
    if (userAction === "liked") {
      setLikes(updatedLikes - 1);
      setUserAction(null);
    } else if (userAction === "disliked") {
      setLikes(updatedLikes + 2);
      setUserAction("liked");
    } else {
      setLikes(updatedLikes + 1);
      setUserAction("liked");
    }
  };

  const handleDislikes = () => {
    if (userAction === "disliked") {
      setLikes(updatedLikes + 1);
      setUserAction(null);
    } else if (userAction === "liked") {
      setLikes(updatedLikes - 2);
      setUserAction("disliked");
    } else {
      setLikes(updatedLikes - 1);
      setUserAction("disliked");
    }
  };

  return (
    <div className="comment" key={id}>
      <div className="comment-header">
        <span className="user-username">{user.username}</span>
        <span className="user-fullname">{user.fullName}</span>
      </div>
      <div className="comment-body">
        <p>{body}</p>
      </div>
      <div className="comment-footer">
        <div className="like-button" onClick={handleLikes}>
          Like
        </div>
        <div className="like-button" onClick={handleDislikes}>
          Dislike
        </div>
        <span className="likes">Likes: {updatedLikes}</span>
        <span className="post-id">Post ID: {postId}</span>
      </div>
    </div>
  );
};

export default Komentarz;
