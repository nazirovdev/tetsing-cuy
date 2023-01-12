import styled from "styled-components";

const ThreadHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  flex-direction: ${({ fdr }) => fdr};
  margin: ${({ margin }) => margin};
  width: ${({ width }) => width};
  flex-wrap: ${({ wrap }) => wrap};
  background-color: ${({ bg }) => bg};
  justify-content: center;
`

ThreadHeader.defaultProps = {
  gap: '1em',
  fdr: 'row'
}

export default ThreadHeader