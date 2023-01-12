import React from 'react'
import ThreadHeader from './ThreadHeader'
import ThreadItemCategory from './ThreadItemCategory'
import PropTypes from 'prop-types'

export default function ThreadListCategory({ categories }) {
  return (
    <ThreadHeader margin='1em 0 0 0' width='70%' wrap='wrap'>
      <ThreadItemCategory />
    </ThreadHeader>
  )
}

ThreadListCategory.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
}