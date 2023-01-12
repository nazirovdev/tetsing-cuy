import React from 'react'
import { BiLogOut } from 'react-icons/bi'
import { FaHome, FaUserAlt } from 'react-icons/fa'
import { MdLeaderboard } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Heading from '../Typografi/Heading'
import Icon from '../Typografi/Icon'
import SideNavItem from './SideNavItem'
import SideNavList from './SideNavList'
import SideNavWrapper from './SideNavWrapper'

export default function Sidenav({ hide }) {
  return (
    <SideNavWrapper hide={hide}>
      <SideNavList>
        <Link to='/'>
          <SideNavItem>
            <Icon size='1.5em'>
              <FaHome />
            </Icon>
            <Heading>Homepage</Heading>
          </SideNavItem>
        </Link>
        <Link to='/leaderboards'>
          <SideNavItem>
            <Icon size='1.5em'>
              <MdLeaderboard />
            </Icon>
            <Heading>Leaderboard</Heading>
          </SideNavItem>
        </Link>
        <Link to='/profile'>
          <SideNavItem>
            <Icon size='1.5em'>
              <FaUserAlt />
            </Icon>
            <Heading>Profile</Heading>
          </SideNavItem>
        </Link>
      </SideNavList>
      <SideNavItem>
        <Icon size='1.5em'>
          <BiLogOut />
        </Icon>
        <Heading>Logout</Heading>
      </SideNavItem>
    </SideNavWrapper>
  )
}
