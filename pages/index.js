/* eslint-disable jsx-a11y/no-onchange */
/* eslint-disable no-await-in-loop */
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import LoadingView from 'components/LoadingView'
import MainView from 'components/MainView'
import SpinnerModal from 'components/SpinnerModal'
import LocationErrorView from 'components/LocationErrorView'
import NoPlacesView from 'components/NoPlacesView'
import useRandomTexts from 'hooks/useRandomTexts'
import useApi from 'hooks/useApi'
import {
  REFETCHING,
  LOADING,
  POSITION_PERMISSION_DENIED,
  // SUCCESS,
} from 'utils/constants'
import { getDistanceFromLatLon, getLanguageFromBrowser } from 'utils/helpers'
import { INITIAL_RADIUS } from 'utils/configs'

function IndexPage() {
  const [language, setLanguage] = useState('en')
  const [history, setHistory] = useState([])
  const [radius, setRadius] = useState(INITIAL_RADIUS)
  const router = useRouter()

  const {
    setRandomPrompts,
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
    allPlaces,
    setPlace,
  } = useApi()

  useEffect(() => {
    const idx = Number(router.query.idx || 0)
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
  }, [router.query.idx])

  // initial load.
  useEffect(() => {
    setLanguage(getLanguageFromBrowser())
    setRandomPrompts()
    fetchPlaces()
    // clear url in case someone shares a link with idx=<number>
    router.replace('/', '/', { shallow: true })
  }, [])

  const handleSkipClick = () => {
    setRandomPlace()
    setRandomPrompts()

    // update history
    const idx = Number(router.query.idx || 0)
    const isAtPastPlace = idx < history.length
    const href = `/?idx=${idx + 1}`
    if (isAtPastPlace) {
      setHistory((v) => v.slice(0, idx).concat([{ place, heading, skipText }]))
    }
    router.push(href, href, { shallow: true })
  }

  const handleRadiusChange = async (el) => {
    const { value } = el.target
    setRadius(Number(value))
    await fetchPlaces({ radius: value })
    setRandomPrompts()
  }

  if (mode === LOADING) {
    return <LoadingView language={language} />
  }

  if (mode === POSITION_PERMISSION_DENIED) {
    return <LocationErrorView language={language} />
  }

  if (!place) {
    return (
      <>
        <NoPlacesView
          {...{ language, radius, onRadiusChange: handleRadiusChange }}
        />
        <SpinnerModal shouldOpen={mode === REFETCHING} />
      </>
    )
  }

  const distance = getDistanceFromLatLon(
    currentLatLng[0],
    currentLatLng[1],
    place.geometry.location.lat,
    place.geometry.location.lng
  )

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
          radius,
          distance,
          shouldShowSkip: allPlaces.length > 1,
        }}
      />
      <SpinnerModal shouldOpen={mode === REFETCHING} />
    </>
  )
}

export default IndexPage
