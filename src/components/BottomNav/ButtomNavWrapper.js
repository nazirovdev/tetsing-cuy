import styled from 'styled-components';

const ButtomNavWrapper = styled.nav`
  background-color: white;
  height: 3rem;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  /* background-color: #343541; */
  background-color: #202123;
  border-top: solid 1px #5D5D67;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media (min-width: 768px) {
    display: none;
  }
`

export default ButtomNavWrapper