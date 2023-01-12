import React from 'react'
import { GoPrimitiveDot } from 'react-icons/go'
import { FaCommentAlt } from 'react-icons/fa'
import { AiFillDislike, AiFillLike } from 'react-icons/ai'
import Icon from '../Typografi/Icon'
import Paragrapf from '../Typografi/Paragraph'
import SubHeading from '../Typografi/SubHeading'
import ThreadAvatar from './ThreadAvatar'
import ThreadCard from './ThreadCard'
import ThreadCategory from './ThreadCategory'
import ThreadHeader from './ThreadHeader'
import { Link } from 'react-router-dom'
import HTMLReactParser from 'html-react-parser'
import { useDispatch } from 'react-redux'
import { toggleUpVoteThread } from '../../states/threads/action'

export default function ThreadItem({ thread }) {
  const dispatch = useDispatch()

  const {
    id,
    title,
    body,
    category,
    createdAt,
    upVotesBy,
    downVotesBy,
    totalComments,
    // user
  } = thread

  const onToggleUpVote = (threadId) => {
    dispatch(toggleUpVoteThread(threadId))
  }

  const onToggleDownVote = () => {
  }

  return (
    <ThreadCard>
      <Link to={`/threads/${id}`}><SubHeading fw='bold' size='1.1em'>{title}</SubHeading></Link>
      <ThreadHeader fdr='row'>
        <ThreadAvatar src={'user.avatar'} />
        <SubHeading>{'user.name'}</SubHeading>
        <Icon>
          <GoPrimitiveDot />
        </Icon>
        <SubHeading fw='normal'>{createdAt}</SubHeading>
      </ThreadHeader>
      <div style={{ color: '#D9D9E3', fontSize: '1em' }}>{HTMLReactParser(body)}</div>
      <ThreadCategory>
        <Paragrapf fw='bold'>#{category}</Paragrapf>
      </ThreadCategory>
      <ThreadHeader gap='0.3em'>
        <Icon>
          <FaCommentAlt />
        </Icon>
        <Paragrapf>{totalComments} Komentar</Paragrapf>
      </ThreadHeader>
      <ThreadHeader>
        <ThreadHeader gap='0.3em'>
          <Icon onClick={() => onToggleUpVote(id)}>
            <AiFillLike />
          </Icon>
          <Paragrapf>{upVotesBy.length}</Paragrapf>
        </ThreadHeader>
        <ThreadHeader gap='0.3em'>
          <Icon onClick={onToggleDownVote}>
            <AiFillDislike />
          </Icon>
          <Paragrapf>{downVotesBy.length}</Paragrapf>
        </ThreadHeader>
      </ThreadHeader>
    </ThreadCard>
  )
}

// ThreadItem.propTypes = {
//   thread: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     body: PropTypes.string.isRequired,
//     category: PropTypes.string.isRequired,
//     createdAt: PropTypes.string.isRequired,
//     ownerId: PropTypes.string.isRequired,
//     upVotesBy: PropTypes.array.isRequired,
//     downVotesBy: PropTypes.array.isRequired,
//     totalComments: PropTypes.number.isRequired,
//     user: PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       email: PropTypes.string.isRequired,
//       avatar: PropTypes.string.isRequired,
//     }).isRequired
//   }).isRequired
// }