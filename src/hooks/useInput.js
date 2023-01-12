import { useState } from "react"

const useInput = (defaultValue) => {
  const [input, setInput] = useState(defaultValue)

  const onChangeInput = (e) => {
    setInput(e.target.value)
  }

  const onResetInput = () => {
    setInput('')
  }

  return [input, onChangeInput, onResetInput]
}

export default useInput