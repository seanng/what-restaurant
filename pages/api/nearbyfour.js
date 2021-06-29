/* eslint-disable no-await-in-loop */
import { Client } from '@googlemaps/google-maps-services-js'
import uniqBy from 'ramda/src/uniqBy'
import prop from 'ramda/src/prop'
import flatten from 'ramda/src/flatten'

const gmaps = new Client({})

// CONSTANTS & DEFAULTS
const EARTH_RADIUS = 6371000
const LOCATION = {
  // somewhere in sheung wan...
  lat: 22.284014,
  lng: 114.151726,
}

/**
 * Google's API only returns 20 results (and pagination takes 2 seconds to generate)
 * So this function returns 4 coordinates half a radius away from the target
 * In order to fire 4 asynchronous requests to Google's API (giving us 80 instead of 20 results)
 * @see https://stackoverflow.com/a/7478827
 * */
function getCoords({ lat, lng }, radius) {
  const dRadius = radius / EARTH_RADIUS
  const latDiff = dRadius * (180 / Math.PI)
  const lngDiff = latDiff / Math.cos(lat * (Math.PI / 180))

  return {
    east: { lng: lng + lngDiff, lat },
    west: { lng: lng - lngDiff, lat },
    north: { lat: lat + latDiff, lng },
    south: { lat: lat - latDiff, lng },
  }
}

/**
 * Call this on init or location change to get all the nearby places
 * Frontend can handle randomizer
 * @see https://developers.google.com/maps/documentation/places/web-service/search#PlaceSearchRequests
 */
export default async function nearby(req, res) {
  const { location = LOCATION, radius: searchRadius = 500 } = req.body
  const radius = searchRadius / 2
  const params = {
    key: process.env.GOOGLE_MAPS_API_KEY,
    type: 'restaurant',
    opennow: true,
    language: 'en',
    ...req.body,
    radius,
  }

  const { north, south, east, west } = getCoords(location, radius)

  try {
    const rawResponse = await Promise.all([
      gmaps.placesNearby({ params: { ...params, location: north } }),
      gmaps.placesNearby({ params: { ...params, location: east } }),
      gmaps.placesNearby({ params: { ...params, location: west } }),
      gmaps.placesNearby({ params: { ...params, location: south } }),
    ])

    const rawResults = rawResponse.map(({ data }) => data.results)
    const uniqResults = uniqBy(prop('place_id'), flatten(rawResults))

    res.json(uniqResults)
  } catch (error) {
    if (error.response) {
      console.log('response: ', error.response)
    } else if (error.request) {
      console.log('request: ', error.request)
    } else if (error.message) {
      console.log('message: ', error.message)
    }
    // console.log('error: ', error.toJSON())
    res.send('error')
  }
}
