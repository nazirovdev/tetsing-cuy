import React from 'react'
import Paragrapf from '../Typografi/Paragraph'
import ThreadCategory from './ThreadCategory'
import PropTypes from 'prop-types'

export default function ThreadItemCategory({ categoryName }) {
  return (
    <ThreadCategory>
      <Paragrapf>{'categoryName'}</Paragrapf>
    </ThreadCategory>
  )
}