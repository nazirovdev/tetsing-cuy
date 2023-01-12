import { FaBars, FaPlus, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Heading from '../Typografi/Heading';
import Icon from '../Typografi/Icon';

const HeaderWrapper = styled.header`
  /* background-color: #343541; */
  background-color: #202123;
  position:fixed;
  display: flex;
  align-items:center;
  justify-content: space-between;
  padding:0 0.8em;
  height: 3rem;
  top:0;
  left:0;
  right:0;
  border-bottom: solid 1px #5D5D67;
`

const Header = ({ hide, setHide }) => (
  <HeaderWrapper>
    <Icon hide={true}>
      {
        !hide ? (
          <FaTimes onClick={() => setHide(!hide)} />
        ) : (
          <FaBars onClick={() => setHide(!hide)} />
        )
      }
    </Icon>
    <Link to='/'><Heading>Dicoding Discussion App</Heading></Link>
    <Link to='/add'>
      <Icon>
        <FaPlus />
      </Icon>
    </Link>
  </HeaderWrapper>
)

export default Header