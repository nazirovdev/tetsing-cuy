import styled from "styled-components";

const ThreadCategory = styled.span`
  background-color:#202123;
  width:fit-content;
  padding: 0.3em 0.9em;
  border-radius: 10px;
  cursor:default;
  margin: ${({ margin }) => margin}
`

export default ThreadCategory