import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 2000);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  //   useEffect(() => {
  //     setTimeout(() => {
  //       const response = Login;

  //       setData(response);
  //     }, 2000);

  //   }, []);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="load">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Benutzername:
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
            />
          </label>
          <br />
          <label>
            Passwort:
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={handleRememberMeChange}
            />
            Eingeloggt bleiben
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
}

export default Login;
