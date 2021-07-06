import { getHumanReadableDistance } from 'utils/helpers'

export const loadingTexts = [
  {
    en: 'FINDING NEARBY RESTAURANTS...',
    zh: 'FINDING NEARBY RESTAURANTS...',
  },
]

export const headings = [
  {
    en: 'Check out',
    zh: '去li lan間',
  },
  {
    en: 'Eat some of this',
    zh: '去li lan間',
  },
  {
    en: 'Sup. Have you tried',
    zh: '去li lan間',
  },
  {
    en: 'How about',
    zh: '去li lan間',
  },
  {
    en: 'Yo what about',
    zh: '去li lan間',
  },
  {
    en: 'Yo I heard this place was lit af',
    zh: '去li lan間',
  },
]

export const skipTexts = [
  {
    en: 'Naw dawg. Show me another place!',
    zh: '別的地方',
  },
  {
    en: "This place ain't it. Show me another place!",
    zh: '別的地方',
  },
  {
    en: "I'm not feelin it. Show me another place!",
    zh: '別的地方',
  },
  {
    en: 'I want to eat somewhere else!',
    zh: '別的地方',
  },
  {
    en: 'Show me another restaurant!',
    zh: '別的地方',
  },
  {
    en: 'No thanks. I want to eat somewhere else!',
    zh: '別的地方',
  },
]

const translations = {
  enableLocationHeading: {
    en: 'ENABLE YOUR LOCATION',
    zh: 'ENABLE YOUR LOCATION',
  },
  enableLocationPrompt: {
    en: 'Refresh this page after you',
    zh: 'Refresh this page after you',
  },
  expandMyRadius: {
    en: 'Expand my search radius',
    zh: 'Expand my search radius',
  },
  noPlacesNearbyPrompt: (radius) => ({
    en: `No places are open within ${getHumanReadableDistance(
      radius
    )} of your current location`,
    zh: 'There are no places in the selected vicinity.',
  }),
  noPlacesNearbyHeading: {
    en: 'Widen your search radius',
    zh: 'Widen your search radius',
  },
  priceLevel1: {
    en: '💸  (Under $100)',
    zh: '💸  ($100 yi har)',
  },
  priceLevel2: {
    en: '💸 💸  ($100 - $200)',
    zh: '💸 💸  ($100 - $200)',
  },
  priceLevel3: {
    en: '💸 💸 💸  ($200 - $400)',
    zh: '💸 💸 💸  ($200 - $400)',
  },
  priceLevel4: {
    en: '💸 💸 💸 💸  ($400 - $800)',
    zh: '💸 💸 💸 💸  ($400 - $800)',
  },
  priceLevel5: {
    en: '💸 💸 💸 💸 💸  (Over $800)',
    zh: '💸 💸 💸 💸 💸  (Over $800)',
  },
  withinRadius: (radius) => ({
    en: `within ${getHumanReadableDistance(radius)} of my location`,
    zh: `within ${getHumanReadableDistance(radius)} of my location`,
  }),
}

export default {
  ...translations,
  ...skipTexts,
  ...headings,
}
