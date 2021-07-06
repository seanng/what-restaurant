import { useState } from 'react'
import { skipTexts, headings } from 'data/translations'
import { getRandom } from 'utils/helpers'

export default function useRandomTexts(language) {
  const [heading, setHeading] = useState('')
  const [skipText, setSkipText] = useState('')

  const setRandomPrompts = () => {
    setSkipText(getRandom(skipTexts)[language])
    setHeading(getRandom(headings)[language])
  }

  return {
    setRandomPrompts,
    heading,
    skipText,
    setSkipText,
    setHeading,
  }
}
