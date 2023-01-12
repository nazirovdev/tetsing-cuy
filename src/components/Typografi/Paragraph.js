import PropTypes from 'prop-types'
import styled from "styled-components";

const Paragrapf = styled.p`
  font-size: ${({ size }) => size && size};
  color: ${({ color }) => color && color};
  text-align: ${({ align }) => align && align};
  font-weight: ${({ fw }) => fw && fw};
`

Paragrapf.defaultProps = {
  color: '#D9D9E3',
  size: '1em'
}

Paragrapf.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string
}

export default Paragrapf