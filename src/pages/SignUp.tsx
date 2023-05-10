import { useState } from "react";
import Container from "../components/Container/Container";
import Card from "../components/Card/Card";
import CustomInput from "../components/CustomInput/CustomInput";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const data = { name, email, password, password2 };
    let response = await fetch("http://localhost:4000/api/users/register", {
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
        <h3>Sign Up</h3>
        <form onSubmit={handleSubmit} method="POST">
          <CustomInput
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            name="name"
            placeholder="Name"
          />
          <CustomInput
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            name="email"
            placeholder="Email"
          />
          <CustomInput
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            name="password"
            placeholder="Password"
          />
          <CustomInput
            onChange={(e) => setPassword2(e.target.value)}
            value={password2}
            type="password"
            name="password2"
            placeholder="Confirm password"
          />
          <div>
            <input type="submit" value="Sign Up" />
          </div>
          <Link to="/login">Already Registered? Login Here</Link>
        </form>
        <p>{name}</p>
      </Card>
    </Container>
  );
}

export default SignUp;
