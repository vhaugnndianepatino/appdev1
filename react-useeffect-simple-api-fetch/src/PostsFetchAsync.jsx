import React from "react";
import { useState, useEffect } from "react";

function PostsFetchAsync() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch(
          "htt://jsonplaceholder.typicode.com/posts?_limit=5"
        );
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching todos:", error);
        setError("Error fetching todos");
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <p>Title: {post.title}</p>
            <p>Body: {post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsFetchAsync;