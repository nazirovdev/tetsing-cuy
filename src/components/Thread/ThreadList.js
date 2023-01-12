import React from 'react'
import ThreadItem from './ThreadItem'
import ThreadWrapper from './ThreadWrapper'


export default function ThreadList({ threads }) {
  return (
    <ThreadWrapper>
      {
        threads.map((thread, i) => (
          <ThreadItem thread={thread} key={thread.id} />
        ))
      }
    </ThreadWrapper>
  )
}