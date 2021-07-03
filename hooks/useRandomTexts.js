import { useState, useEffect } from 'react'
import headings from 'data/headings'
import skipTexts from 'data/skip-texts'
import t from 'data/translations'
import { getRandom } from 'utils/helpers'

export default function useRandomTexts(language) {
  const [heading, setHeading] = useState('')
  const [skipText, setSkipText] = useState('')

  const updatePrompts = () => {
    setHeading(t[getRandom(headings)][language])
    setSkipText(t[getRandom(skipTexts)][language])
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
