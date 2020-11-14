import React from "react";
import { Link, useHistory } from "react-router-dom";

export const LoginPage: React.FC = () => {
  const history = useHistory();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username === "admin" && password === "aaa") {
      history.push("./puppies.scene");
    } else {
      alert("User / password not valid, pssst... maybe admin/test?");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Hello from login page</h2>
      <div>
        <div>
          <label>Username: </label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <button type="submit">Login</button>
    </form>
  );
};
