import { StyledFooter } from "./StyledFooter";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <StyledFooter>
      <span>
        Made by{" "}
        <Link to="https://asalazar.dev/" target="_blank">
          Alex Salazar
        </Link>
      </span>
    </StyledFooter>
  );
}

export default Footer;
