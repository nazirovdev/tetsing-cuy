import styled from "styled-components";

const LabelText = styled.p`
  color: white;
  text-align: ${({ align }) => align};
  color: ${({ color }) => color};
`

export default LabelText