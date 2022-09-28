import { createContext, useState, useEffect } from "react";

const AuthContext = createContext({ user: {}, token: "" });

function AuthContextComponent(props) {
  const [loggedInUser, setLoggedInUser] = useState({ user: {}, token: "" });

  return (
    <AuthContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthContextComponent };
