import { useState } from "react";
import LOGIN from "./component/Login";

function App() {
  const adminUser = {
    email: "admin@gmail.com",
    password: "admin123 ",
  };

  // name: "",
  const [user, setUser] = useState({ email: "" });

  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      console.log("logged in");

      setUser({
        // name: details.name,
        email: details.email,
      });
    } else {
      console.log("Details do not match ");
      setError("Details do not match");
    }
  };

  const Logout = () => {
    setUser({ email: "" });
  };

  return (
    <div className="App">
      {user.email !== "" ? (
        <div className="welcome">
          <h2>
            Welcome ,<span>{user.name}</span>
          </h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LOGIN Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
