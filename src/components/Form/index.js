import React from 'react'
import FormWrapper from './FormWrapper'

export default function Form({ children, mt, w }) {
  return (
    <FormWrapper mt={mt} w={w}>
      {children}
    </FormWrapper>
  )
}
