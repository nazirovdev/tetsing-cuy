import styled from "styled-components"

const ThreadWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items:center;
  gap: 1em;
  margin-top: 3em;
  
  @media (min-width: 576px) {
    width: 70%;
  }
`

export default ThreadWrapper