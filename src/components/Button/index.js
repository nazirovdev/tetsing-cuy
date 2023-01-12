import styled from "styled-components";

const Button = styled.button`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  color: ${({ color }) => color};
  background-color: ${({ bg }) => bg};
  border-radius: 10px;
  border-style: none;
  font-weight: bold;
  font-size: 1em;
  cursor: pointer;
`

Button.defaultProps = {
  width: '100%',
  height: '100%',
  color: 'initial',
  margin: 'initial',
  bg: 'white',
}

export default Button