import styled from 'styled-components';

const SideNavWrapper = styled.div`
  width: 15rem;
  height: 100vh;
  /* background-color: #343541; */
  background-color: #202123;
  padding:0 0.8em;
  padding-bottom:8em;
  position:fixed;
  border-right: solid 1px #5D5D67;
  left:${({ hide }) => hide ? '-100%' : '0'};
  transition: 200ms all ;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export default SideNavWrapper