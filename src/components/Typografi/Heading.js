import PropTypes from 'prop-types'
import styled from "styled-components";

const Heading = styled.h1`
  font-size: ${({ size }) => size && size};
  color: ${({ color }) => color && color};
  text-align: ${({ align }) => align && align};
  font-weight: ${({ fw }) => fw && fw};
`

Heading.defaultProps = {
  color: '#D9D9E3',
  size: '1em'
}

Heading.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string
}

export default Heading