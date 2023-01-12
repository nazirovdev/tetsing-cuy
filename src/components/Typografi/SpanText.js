import styled from "styled-components";

const SpanText = styled.span`
  color: white;
  text-align: ${({ align }) => align};
  color: ${({ color }) => color};
  font-weight: bold;
`

export default SpanText