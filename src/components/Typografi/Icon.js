import styled from 'styled-components';

const Icon = styled.i`
  font-size: ${({ size }) => size && size};
  color: ${({ color }) => color && color};
  flex-direction:column;
  display:flex;
  visibility: ${({ hide }) => hide ? 'hidden' : 'visible'};
  cursor:${({ cursor }) => cursor && cursor};

  @media (min-width: 768px) {
    display:flex;
    visibility: visible;
  }
`

Icon.defaultProps = {
  color: '#D9D9E3',
  size: '1em',
  cursor: 'pointer',
}

export default Icon