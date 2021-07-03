/* eslint-disable no-await-in-loop */
/* global navigator */
import { useState, useEffect } from 'react'
import axios from 'axios'
import {
  LOADING,
  REFETCHING,
  NO_NEARBY_RESTAURANT,
  POSITION_PERMISSION_DENIED,
  POSITION_UNAVAILABLE,
  POSITION_TIMEOUT,
  SUCCESS,
  NO_GEOLOCATION,
} from 'utils/constants'
import dummyResults from 'data/dummy-results'
import { getRandom, sleep } from 'utils/helpers'
import { INITIAL_RADIUS } from 'utils/configs'

export default function useApi() {
  const [mode, setMode] = useState(LOADING)
  const [place, setPlace] = useState(dummyResults[0])
  const [allPlaces, setAllPlaces] = useState(dummyResults)
  // const [place, setPlace] = useState(null)
  // const [allPlaces, setAllPlaces] = useState([])

  function setRandomPlace(list = allPlaces) {
    const randomPlace = getRandom(list)
    if (!randomPlace) {
      setMode(NO_NEARBY_RESTAURANT)
      return
    }
    // const placeWithPhotoUrl = await getPlaceWithPhotoUrl(randomPlace)
    setPlace(randomPlace)
  }

  async function fetchPlaces(payload) {
    return new Promise((resolve) => {
      if (!navigator.geolocation) {
        setMode(NO_GEOLOCATION)
      }

      navigator.geolocation.getCurrentPosition(
        (position) => handleRequest(position, payload, resolve),
        handleNavigatorError
      )
    })
  }

  async function handleRequest(
    { coords: { longitude, latitude } },
    payload = {},
    cb = () => {}
  ) {
    if (mode !== LOADING) {
      setMode(REFETCHING)
    }
    let pagetoken
    let results = []
    do {
      const { data } = await axios.post('/api/nearby', {
        radius: INITIAL_RADIUS,
        ...payload,
        pagetoken,
        location: { longitude, latitude },
      })
      // during first iteration
      if (!pagetoken) {
        setRandomPlace(data.results)
        setAllPlaces(data.results)
        cb()
      }
      pagetoken = data.next_page_token
      results = results.concat(data.results)
      setMode(SUCCESS)
      // wait for token to be made available on google places api
      await sleep(2000)
      // then quietly fetch remaining pages
    } while (pagetoken)
    setAllPlaces(results)
  }

  function handleNavigatorError(error) {
    switch (error.code) {
      case 1:
        setMode(POSITION_PERMISSION_DENIED)
        break
      case 2:
        // Your precise location could not be determined.
        setMode(POSITION_UNAVAILABLE)
        break
      case 3:
        setMode(POSITION_TIMEOUT)
        break
      default:
        setMode(error.message)
    }
  }

  useEffect(() => {
    // TODO: uncomment fetchPlaces
    fetchPlaces()
  }, [])

  return {
    fetchPlaces,
    mode,
    place,
    setRandomPlace,
    allPlaces,
  }
}
