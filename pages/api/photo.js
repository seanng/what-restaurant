import { Client } from '@googlemaps/google-maps-services-js'

const gmaps = new Client({})

export default async function nearby(req, res) {
  const { photoreference, maxwidth = 400 } = req.body

  try {
    const { data } = await gmaps.placePhoto({
      params: {
        key: process.env.GOOGLE_MAPS_API_KEY,
        maxwidth,
        photoreference,
      },
    })

    res.send(data)
  } catch (error) {
    if (error.response) {
      console.log('response: ', error.response)
    } else if (error.request) {
      console.log('request: ', error.request)
    } else if (error.message) {
      console.log('message: ', error.message)
    }
    console.log('error: ', error.toJSON())
    res.status(400).send('error')
  }
}
