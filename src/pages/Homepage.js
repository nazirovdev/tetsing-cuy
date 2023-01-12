import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Main from '../components/Layout/Main'
import Section from '../components/Layout/Section'
import ThreadList from '../components/Thread/ThreadList'
import ThreadListCategory from '../components/Thread/ThreadListCategory'
import Heading from '../components/Typografi/Heading'
import { asyncReceiveThread } from '../states/threads/action'

export default function Homepage() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncReceiveThread())
  }, [dispatch])

  const { threadReducer } = useSelector((states) => states)

  return (
    <Main>
      <Section>
        <Heading size='1.5em'>Thread Tersedia</Heading>
        <ThreadListCategory categories={['']} />
        <ThreadList threads={threadReducer.threads} />
      </Section>
    </Main>
  )
}
