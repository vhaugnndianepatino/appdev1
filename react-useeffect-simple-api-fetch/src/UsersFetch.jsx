import { useEffect, useState } from "react";

function UsersFetch() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users?_limit=5")
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching todos:", error);
        setLoading(false);
      });
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <h2>Users and Emails</h2>
            <ul>
                {users.map(user => (
                <li key={user.id}>
                    {user.name} - {user.email}
                </li>
                ))}
            </ul>
        </div>
    );
}

export default UsersFetch;