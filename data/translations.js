import { getHumanReadableDistance } from 'utils/helpers'

export const loadingTexts = [
  {
    en: 'Finding nearby restaurants...',
    zh: 'Generating the yummiest restaurants',
  },
]

export const headings = [
  {
    en: 'Check out...',
    zh: '去li lan間',
  },
  {
    en: 'Sup. Have you tried',
    zh: '去li lan間',
  },
  {
    en: 'How about...',
    zh: '去li lan間',
  },
  {
    en: 'Yo I heard this place was lit af',
    zh: '去li lan間',
  },
]

export const skipTexts = [
  {
    en: "This place ain't it",
    zh: '別的地方',
  },
  {
    en: 'Enlighten me with another restaurant',
    zh: '別的地方',
  },
  {
    en: 'Humor me with another restaurant',
    zh: '別的地方',
  },
  {
    en: 'Show me another restaurant',
    zh: '別的地方',
  },
  {
    en: 'Fuck this place',
    zh: '別的地方',
  },
]

const translations = {
  enableLocationHeading: {
    en: 'Refresh this page after enabling your location!',
    zh: 'Please enable your location!',
  },
  enableLocationPrompt: {
    en: "Yo... the site won't work if we can't detect where you are.",
    zh: "Yo... the site won't work if we can't detect where you are.",
  },
  expandMyRadius: {
    en: 'Expand my search radius',
    zh: 'Expand my search radius',
  },
  noPlacesNearbyPrompt: (radius) => ({
    en: `There are no places that are open within ${getHumanReadableDistance(
      radius
    )} of your current location`,
    zh: 'There are no places in the selected vicinity.',
  }),
  noPlacesNearbyHeading: {
    en: 'Please widen your search radius!',
    zh: 'Please widen your search radius!',
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
    en: `within ${getHumanReadableDistance(radius)} of your current location`,
    zh: `within ${getHumanReadableDistance(radius)} of 你的 current location`,
  }),
}

export default {
  ...translations,
  ...skipTexts,
  ...headings,
}
