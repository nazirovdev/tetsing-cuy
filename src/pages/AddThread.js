import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import Form from '../components/Form'
import FormInput from '../components/Form/FormInput'
import Main from '../components/Layout/Main'
import Section from '../components/Layout/Section'
import Heading from '../components/Typografi/Heading'
import useInput from '../hooks/useInput'

export default function AddThread() {
  const [title, setTitle] = useInput('')
  const [body, setBody] = useInput('')
  const [category, setCategory] = useInput('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onLoginHandle = (e) => {
    e.preventDefault()

    // if (title.length < 1 || body.length < 1 || category.length < 1) return

    navigate('/')
  }

  return (
    <Main>
      <Section>
        <Heading size='1.5em'>Add Thread</Heading>
        <Form>
          <FormInput placeholder='Masukkan Judul' type='text' required={true} value={title} onChange={setTitle} />
          <FormInput placeholder='Masukkan Isi' type='text' required={true} value={body} onChange={setBody} />
          <FormInput placeholder='Masukkan Kategori' type='text' required={true} value={category} onChange={setCategory} />
          <Button
            padding='0.8em'
            margin='2em 0 0 0'
            bg='#0E9272'
            color='white'
            onClick={onLoginHandle}
          >Buat
          </Button>
        </Form>
      </Section>
    </Main>
  )
}
