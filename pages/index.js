/* eslint-disable jsx-a11y/no-onchange */
/* eslint-disable no-await-in-loop */
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import LoadingView from 'components/LoadingView'
import MainView from 'components/MainView'
import SpinnerModal from 'components/SpinnerModal'
import useRandomTexts from 'hooks/useRandomTexts'
import useApi from 'hooks/useApi'
import {
  REFETCHING,
  LOADING,
  NO_NEARBY_RESTAURANT,
  // SUCCESS,
} from 'utils/constants'
import { getDistanceFromLatLon } from 'utils/helpers'

function IndexPage() {
  const [language] = useState('en')
  const [history, setHistory] = useState([])
  const router = useRouter()
  const { query } = router

  const {
    updatePrompts,
    heading,
    skipText,
    setSkipText,
    setHeading,
  } = useRandomTexts(language)

  const {
    fetchPlaces,
    place,
    mode,
    setRandomPlace,
    currentLatLng,
    setPlace,
  } = useApi()

  useEffect(() => {
    const idx = Number(query.idx || 0)
    if (history[idx]) {
      setPlace(history[idx].place)
      setHeading(history[idx].heading)
      setSkipText(history[idx].skipText)
    } else {
      setHistory((v) =>
        v.concat([
          {
            place,
            heading,
            skipText,
          },
        ])
      )
    }
  }, [query.idx])

  useEffect(() => {
    // initial load.
    fetchPlaces()
    // clear url in case someone shares a link with idx=<number>
    router.replace('/', '/', { shallow: true })
  }, [])

  const handleSkipClick = () => {
    setRandomPlace()
    updatePrompts()

    // update history
    const idx = Number(query.idx || 0)
    const isAtPastPlace = idx < history.length
    const href = `/?idx=${idx + 1}`
    if (isAtPastPlace) {
      setHistory((v) => v.slice(0, idx).concat([{ place, heading, skipText }]))
    }
    router.push(href, href, { shallow: true })
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

  const distance = getDistanceFromLatLon(
    currentLatLng[0],
    currentLatLng[1],
    place.geometry.location.lat,
    place.geometry.location.lng
  )

  // if (mode !== SUCCESS) {
  //   return <div>{mode}</div>
  // }

  // success
  return (
    <>
      <MainView
        {...{
          heading,
          skipText,
          place,
          language,
          onSkipClick: handleSkipClick,
          onRadiusChange: handleRadiusChange,
          distance,
        }}
      />
      <SpinnerModal shouldOpen={mode === REFETCHING} />
    </>
  )
}

export default IndexPage
