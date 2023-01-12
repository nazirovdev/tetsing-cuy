import styled from "styled-components";

const LeaderBoardWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin-top: 4em;
  
  @media (min-width: 576px) {
    width: 50%;
  }
`

export default LeaderBoardWrapper