import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Review from "./pages/Review";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="review" element={<Review />} />
      <Route path="sign-up" element={<SignUp />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
}

export default App;
