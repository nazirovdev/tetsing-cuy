import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Form from '../components/Form'
import FormInput from '../components/Form/FormInput'
import Main from '../components/Layout/Main'
import Section from '../components/Layout/Section'
import Heading from '../components/Typografi/Heading'
import LabelText from '../components/Typografi/LabelText'
import SpanText from '../components/Typografi/SpanText'
import useInput from '../hooks/useInput'
import { asyncSetAuthUser } from '../states/authUser/action'

export default function Login() {
  const [email, setEmail] = useInput('')
  const [password, setPassword] = useInput('')
  const dispatch = useDispatch()

  const onLoginHandle = (e) => {
    e.preventDefault()
    dispatch(asyncSetAuthUser({ email, password }))
  }

  return (
    <Main>
      <Section>
        <Heading size='1.5em'>Halaman Login</Heading>
        <Form>
          <FormInput placeholder='Masukkan Email' type='email' required={true} value={email} onChange={setEmail} />
          <FormInput placeholder='Masukkan Password' type='password' required={true} value={password} onChange={setPassword} />
          <Button
            padding='0.8em'
            margin='2em 0 0 0'
            bg='#0E9272'
            color='white'
            onClick={onLoginHandle}
          >Login
          </Button>
          <LabelText align='center'>
            Belum punya akun ?
            <Link to='/register'><SpanText color='#0E9272'> Daftar</SpanText></Link>
          </LabelText>
        </Form>
      </Section>
    </Main>
  )
}
