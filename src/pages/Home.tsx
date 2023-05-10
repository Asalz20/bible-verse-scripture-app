import Container from "../components/Container/Container";
import Card from "../components/Card/Card";
import { BiRefresh } from "react-icons/bi";
import { MdOutlineSubject } from "react-icons/md";

function Home() {
  return (
    <Container>
      <Card>
        <h5>Url</h5>
        <p>Scripture</p>
        <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
            <g transform="translate(212)" fill="#CEE3E9">
              <rect width="6" height="16" rx="3" />
              <rect x="14" width="6" height="16" rx="3" />
            </g>
          </g>
        </svg>
        <div>
          <div>
            <BiRefresh size="70px" color="blue" />
          </div>
          <div>
            <MdOutlineSubject size="70px" color="blue" />
          </div>
        </div>
      </Card>
    </Container>
  );
}

export default Home;
