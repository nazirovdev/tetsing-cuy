import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Form from '../components/Form'
import FormInput from '../components/Form/FormInput'
import Main from '../components/Layout/Main'
import Section from '../components/Layout/Section'
import Heading from '../components/Typografi/Heading'
import LabelText from '../components/Typografi/LabelText'
import SpanText from '../components/Typografi/SpanText'

export default function Register() {
  return (
    <Main>
      <Section>
        <Heading size='1.5em'>Halaman Register</Heading>
        <Form>
          <FormInput placeholder='Masukkan Name' type='text' required={true} />
          <FormInput placeholder='Masukkan Email' type='email' required={true} />
          <FormInput placeholder='Masukkan Password' type='password' required={true} />
          <Button
            padding='0.8em'
            margin='2em 0 0 0'
            bg='#0E9272'
            color='white'
          >Login
          </Button>
          <LabelText align='center'>
            Sudah punya akun ?
            <Link to='/login'><SpanText color='#0E9272'> Masuk</SpanText></Link>
          </LabelText>
        </Form>
      </Section>
    </Main>
  )
}
