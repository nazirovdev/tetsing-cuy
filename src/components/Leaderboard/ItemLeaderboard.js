import React from 'react'
import Heading from '../Typografi/Heading'
import ItemHeader from './ItemHeader'
import LeaderBoardAvatar from './LeaderboardAvatar'
import LeaderBoardCard from './LeaderboardCard'

export default function ItemLeaderboard() {
  return (
    <LeaderBoardCard>
      <ItemHeader>
        <LeaderBoardAvatar />
        <Heading size='1em'>Nazirov</Heading>
      </ItemHeader>
      <Heading size='1em'>20</Heading>
    </LeaderBoardCard>
  )
}
