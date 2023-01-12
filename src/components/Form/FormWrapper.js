import styled from "styled-components";

const FormWrapper = styled.form`
  width: ${({ w }) => w ? w : '85%'};
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin-top: ${({ mt }) => mt};
  
  @media (min-width: 576px) {
    width: ${({ w }) => w};
  }
`

FormWrapper.defaultProps = {
  mt: '4em',
  w: '50%'
}

export default FormWrapper