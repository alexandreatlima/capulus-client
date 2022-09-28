import { api } from "../../api/api";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export function Login() {
  const navigate = useNavigate();

  const { setLoggedInUser } = useContext(AuthContext);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const logged = await api.post("/user/login", form);

      console.log(logged.data);

      //É AQUI QUE A MAGIA TEM QUE ACONTECER
      // É AQUI QUE A GENTE VAI ATUALIZAR O NOSSO CONTEXTO

      setLoggedInUser({ ...logged.data });

      navigate("/profile");
    } catch (err) {
      console.log(`ESSE CONSOLE LOG AQUI`, err);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">E-mail:</label>
      <input
        id="email"
        type="text"
        name="email"
        value={form.email}
        onChange={handleChange}
      />

      <label htmlFor="password">Senha:</label>
      <input
        id="password"
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
      />

      <button>Entrar</button>
    </form>
  );
}
