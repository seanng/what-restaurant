import { getHumanReadableDistance } from 'utils/helpers'

export const loadingTexts = [
  {
    en: 'FINDING NEARBY RESTAURANTS...',
    'zh-HK': 'FINDING NEARBY RESTAURANTS...',
  },
]

export const headings = [
  {
    en: 'Check out',
    'zh-HK': 'Check out',
  },
  {
    en: 'Eat some of this',
    'zh-HK': 'Eat some of this',
  },
  {
    en: 'Sup. Have you tried',
    'zh-HK': 'Sup. Have you tried',
  },
  {
    en: 'How about',
    'zh-HK': 'How about',
  },
  {
    en: 'Yo what about',
    'zh-HK': 'Yo what about',
  },
  {
    en: 'Yo I heard this place was lit af',
    'zh-HK': 'Yo I heard this place was lit af',
  },
  {
    en: "This place is poppin' off",
    'zh-HK': "This place is poppin' off",
  },
]

export const skipTexts = [
  // {
  //   en: 'Naw dawg. Show me another place!',
  //   zh: '別的地方',
  // },
  // {
  //   en: "This place ain't it. Show me another place!",
  //   zh: '別的地方',
  // },
  // {
  //   en: "I'm not feelin it. Show me another place!",
  //   zh: '別的地方',
  // },
  {
    en: 'I want to eat somewhere else',
    'zh-HK': 'I want to eat somewhere else',
  },
  {
    en: 'Show me another restaurant',
    'zh-HK': 'Show me another restaurant',
  },
  {
    en: 'Show me another place',
    'zh-HK': 'Show me another place',
  },
  // {
  //   en: 'No thanks. I want to eat somewhere else!',
  //   zh: '別的地方',
  // },
]

const translations = {
  enableLocationHeading: {
    en: 'ENABLE YOUR LOCATION',
    'zh-HK': 'ENABLE YOUR LOCATION',
  },
  enableLocationPrompt: {
    en: 'Refresh this page after you',
    'zh-HK': 'Refresh this page after you',
  },
  expandMyRadius: {
    en: 'Expand my search radius',
    'zh-HK': 'Expand my search radius',
  },
  noPlacesNearbyPrompt: (radius) => ({
    en: `No places are open within ${getHumanReadableDistance(
      radius
    )} of your current location`,
    'zh-HK': 'There are no places in the selected vicinity.',
  }),
  noPlacesNearbyHeading: {
    en: 'Widen your search radius',
    'zh-HK': 'Widen your search radius',
  },
  priceLevel1: {
    en: `💸  (Cheap!)`,
    'zh-HK': '💸  (0 - $100)',
  },
  priceLevel2: {
    en: `💸 💸  (Inexpensive)`,
    'zh-HK': '💸 💸  ($100 - $200)',
  },
  priceLevel3: {
    en: `💸 💸 💸  (Moderately priced)`,
    'zh-HK': '💸 💸 💸  ($200 - $400)',
  },
  priceLevel4: {
    en: `💸 💸 💸 💸  (Pricey!)`,
    'zh-HK': '💸 💸 💸 💸  ($400 - $800)',
  },
  priceLevel5: {
    en: `💸 💸 💸 💸 💸   (Splurge! 🤑 )`,
    'zh-HK': '💸 💸 💸 💸 💸  ($800+)',
  },
  withinRadius: (radius) => ({
    en: `within ${getHumanReadableDistance(radius)} of my location`,
    'zh-HK': `within ${getHumanReadableDistance(radius)} of my location`,
  }),
}

export default {
  ...translations,
  ...skipTexts,
  ...headings,
}
