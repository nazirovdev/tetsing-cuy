import React from 'react'
import Main from '../components/Layout/Main'
import Section from '../components/Layout/Section'
import Leaderboard from '../components/Leaderboard'
import Heading from '../components/Typografi/Heading'

export default function Leaderboards() {
  return (
    <Main>
      <Section>
        <Heading size='1.5em'>Halaman Leaderboards</Heading>
        <Leaderboard />
      </Section>
    </Main>
  )
}
