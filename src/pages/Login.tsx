import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../components/Container/Container";
import Card from "../components/Card/Card";
import CustomInput from "../components/CustomInput/CustomInput";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const data = { email, password };
    let response = await fetch("http://localhost:4000/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then(() => {
      navigate("/login");
    });
  }

  return (
    <Container>
      <Card>
        <h3>Login</h3>
        <form action="/users/login" method="POST">
          <CustomInput
            onChange={}
            type="email"
            name="email"
            placeholder="Email"
          />
          <CustomInput type="password" name="password" placeholder="Password" />
          <div>
            <input type="submit" value="Login" />
          </div>
          <Link to="/sign-up">Not Registered? Sign up here!</Link>
          <Link to="/forgot-password">Forgot Password?</Link>
        </form>
      </Card>
    </Container>
  );
};

export default Login;
