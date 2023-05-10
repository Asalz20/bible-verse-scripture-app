import { StyledCard } from "./StyledCard";

interface Props {
  children: React.ReactNode;
}

const Card: React.FC<Props> = ({ children }) => {
  return <StyledCard>{children}</StyledCard>;
};

export default Card;
