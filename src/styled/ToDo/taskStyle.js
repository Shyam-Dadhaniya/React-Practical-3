import styled from "styled-components";

const ToDOTaskStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3px;
  margin: 0.5em;
  overflow-wrap: anywhere;
`;
export const TodotaskTitle = styled.div`
  color: ${(props) => (props.completed ? "gray" : "black")};
`;
export default ToDOTaskStyle;
