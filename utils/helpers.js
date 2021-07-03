import axios from 'axios'

export function getRandom(list) {
  const randomIdx = Math.floor(Math.random() * list.length)
  return list[randomIdx]
}

export async function getPlaceWithPhotoUrl(restaurant) {
  const [photo] = restaurant.photos || []
  if (!photo || !photo.photo_reference) {
    return restaurant
  }
  const { data } = await axios.post(
    '/api/photo',
    {
      // maxwidth: based on the device width...
      photoreference: photo.photo_reference,
    },
    { responseType: 'blob' }
  )
  return { ...restaurant, photoUrl: window.URL.createObjectURL(data) }
}

export function sleep(ms) {
  return new Promise((res) => setTimeout(res, ms))
}
