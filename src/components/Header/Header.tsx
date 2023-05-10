import { Link } from "react-router-dom";
import { StyledHeader } from "./StyledHeader";

function Header() {
  return (
    <StyledHeader>
      <nav>
        <ul>
          <li>
            <Link to="review">Review</Link>
          </li>
          <li>
            <Link to="sign-up">Sign Up</Link>
          </li>
          <li>
            <Link to="login">Login</Link>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
}

export default Header;
