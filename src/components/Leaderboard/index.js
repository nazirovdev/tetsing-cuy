import React from 'react'
import ItemLeaderboard from './ItemLeaderboard'
import LeaderBoardWrapper from './LeaderboardWrapper'

export default function Leaderboard() {
  return (
    <LeaderBoardWrapper>
      <ItemLeaderboard />
      <ItemLeaderboard />
      <ItemLeaderboard />
      <ItemLeaderboard />
      <ItemLeaderboard />
      <ItemLeaderboard />
    </LeaderBoardWrapper>
  )
}
