import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${props => (props.active ? "#999" : "#ccc")};
  color: ${props => (props.active ? "white" : "black")};
  font-weight: 500;
  padding: 10px;
`;
const isActive = value => value.includes("<b>") && value.includes("</b>");

const Button = ({ value, onApply }) => {
  const active = isActive(value);
  return (
    <StyledButton active={active} onClick={() => onApply(active)}>
      B
    </StyledButton>
  );
};
const apply = (value, active) =>
  active ? value.replace(/<b>|<\/b>/g, "") : `<b>${value}</b>`;

export default [Button, apply];
