import styled from "styled-components"

const ProfileWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items:center;
  gap: 1em;
  margin-top: 3em;
  
  @media (min-width: 576px) {
    width: 50%;
  }
`

export default ProfileWrapper