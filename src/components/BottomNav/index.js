import React from 'react'
import { FaHome, FaUserAlt } from 'react-icons/fa'
import { MdLeaderboard } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Icon from '../Typografi/Icon'
import ButtomNavItem from './BottomNavItem'
import ButtomNavWrapper from './ButtomNavWrapper'

export default function ButtomNav({ children }) {
  return (
    <ButtomNavWrapper>
      <Link to='/leaderboards'>
        <ButtomNavItem>
          <Icon size='1.5em'>
            <MdLeaderboard />
          </Icon>
        </ButtomNavItem>
      </Link>
      <Link to='/'>
        <ButtomNavItem>
          <Icon size='1.5em'>
            <FaHome />
          </Icon>
        </ButtomNavItem>
      </Link>
      <Link to='/profile'>
        <ButtomNavItem>
          <Icon size='1.5em'>
            <FaUserAlt />
          </Icon>
        </ButtomNavItem>
      </Link>
    </ButtomNavWrapper>
  )
}
