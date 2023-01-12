const { default: styled } = require("styled-components");

const Section = styled.section`
  min-height: ${({ height }) => height};
  background-color: ${({ bg }) => bg};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3em;
  padding-bottom: 6em;
`

Section.defaultProps = {
  height: '100vh',
  bg: 'initial',
}

export default Section