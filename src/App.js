import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";
import { AuthContextComponent } from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthContextComponent>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </AuthContextComponent>
    </>
  );
}

export default App;
