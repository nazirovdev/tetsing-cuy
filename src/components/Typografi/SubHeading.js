import PropTypes from 'prop-types'
import styled from "styled-components";

const SubHeading = styled.h2`
  font-size: ${({ size }) => size && size};
  color: ${({ color }) => color && color};
  text-align: ${({ align }) => align && align};
  font-weight: ${({ fw }) => fw && fw};
`

SubHeading.defaultProps = {
  color: '#D9D9E3',
  size: '1em'
}

SubHeading.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string
}

export default SubHeading