/* eslint-disable jsx-a11y/no-onchange */
/* eslint-disable no-await-in-loop */
import { useState } from 'react'
import LoadingView from 'components/LoadingView'
import MainView from 'components/MainView'
import useRandomTexts from 'hooks/useRandomTexts'
import useApi from 'hooks/useApi'
import {
  // REFETCHING,
  LOADING,
  NO_NEARBY_RESTAURANT,
  // SUCCESS,
} from 'utils/constants'

function IndexPage() {
  const [language] = useState('en')
  const { updatePrompts, heading, skipText } = useRandomTexts(language)
  const { fetchPlaces, place, mode, setRandomPlace } = useApi()

  const handleSkipClick = () => {
    setRandomPlace()
    updatePrompts()
  }

  const handleRadiusChange = async (el) => {
    await fetchPlaces({ radius: el.target.value })
    updatePrompts()
  }

  if (mode === LOADING) {
    return <LoadingView />
  }

  if (mode === NO_NEARBY_RESTAURANT || !place) {
    return <div>no nearby place... please widen your search scope :(</div>
  }

  // if (mode !== SUCCESS) {
  //   return <div>{mode}</div>
  // }

  // success
  return (
    <MainView
      {...{
        mode,
        heading,
        skipText,
        place,
        language,
        onSkipClick: handleSkipClick,
        onRadiusChange: handleRadiusChange,
      }}
    />
  )
}

export default IndexPage
