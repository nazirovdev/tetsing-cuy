import { api } from "../../utils/api"
import { threadAction } from "./slice"

const asyncReceiveThread = () => async (dispatch) => {
  dispatch(threadAction.getInitialData())
  try {
    const thread = await api.getThreads()
    dispatch(threadAction.getSuccessData(thread))
  } catch (error) {
    dispatch(threadAction.getErrorData(error.message))
  }
}

const toggleUpVoteThread = (threadId) => (dispatch, getState) => {
  const { threadReducer } = getState()

  const thread = threadReducer.threads.map(thread => {
    if (thread.id === threadId) {
      return {
        ...thread,
        upVotesBy: thread.upVotesBy.includes('user-1')
          ? thread.upVotesBy.filter(upVote => upVote !== 'user-1')
          : thread.upVotesBy.concat('user-1')
      }
    }

    return thread
  })

  dispatch(threadAction.getToggleUpThread(thread))
}

export { asyncReceiveThread, toggleUpVoteThread, }