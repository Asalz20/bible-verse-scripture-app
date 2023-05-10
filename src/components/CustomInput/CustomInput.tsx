import { StyledInput } from "./StyledCustomInput";

interface Props {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  type: string;
  name: string;
  placeholder: string;
}

const CustomInput: React.FC<Props> = ({
  onChange,
  value,
  type,
  name,
  placeholder,
}) => {
  return (
    <StyledInput
      onChange={onChange}
      value={value}
      type={type}
      name={name}
      placeholder={placeholder}
    />
  );
};

export default CustomInput;
