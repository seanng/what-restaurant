import { useState, useEffect } from 'react'
import { skipTexts, headings } from 'data/translations'
import { getRandom } from 'utils/helpers'

export default function useRandomTexts(language) {
  const [heading, setHeading] = useState('')
  const [skipText, setSkipText] = useState('')

  const updatePrompts = () => {
    setSkipText(getRandom(skipTexts)[language])
    setHeading(getRandom(headings)[language])
  }

  useEffect(() => {
    updatePrompts()
  }, [])

  return {
    updatePrompts,
    heading,
    skipText,
  }
}
