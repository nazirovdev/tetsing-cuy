import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import Main from '../components/Layout/Main'
import Section from '../components/Layout/Section'
import ProfileImage from '../components/Profile/ProfileImage'
import ProfileWrapper from '../components/Profile/ProfileWrapper'
import Heading from '../components/Typografi/Heading'


export default function Profile() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onLogin = () => {
    navigate('/login')
  }

  const onRegister = () => {
    navigate('/register')
  }

  const onLogout = () => {
    navigate('/')
  }

  return (
    <Main>
      <Section>
        <Heading size='1.5em'>Profile Thread</Heading>
        <ProfileWrapper>
          <Heading align='center' size='1.2em'>Muhammad Nazir Azhari</Heading>
          <ProfileImage />
          <Button onClick={onLogin} padding='0.7em' bg='#0e9272' color='white'>Login</Button>
          <Button onClick={onRegister} padding='0.7em' bg='#4b85ea' color='white'>Register</Button>
          <Button onClick={onLogout} padding='0.7em' bg='#e84067' color='white'>Logout</Button>
        </ProfileWrapper>
      </Section>
    </Main>
  )
}
