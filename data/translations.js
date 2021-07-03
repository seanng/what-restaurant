const headings = {
  checkOut: {
    en: 'Check out...',
    zh: '去li lan間',
  },
  haveYouTried: {
    en: 'Have you fucking tried...',
    zh: '去li lan間',
  },
  howAbout: {
    en: 'How about...',
    zh: '去li lan間',
  },
  iHeardThisPlaceWasLit: {
    en: 'Yo I heard this place was lit af',
    zh: '去li lan間',
  },
}

const skipTexts = {
  aintIt: {
    en: "This place ain't it",
    zh: '別的地方',
  },
  enlightenMe: {
    en: 'Enlighten me with another restaurant',
    zh: '別的地方',
  },
  humorMe: {
    en: 'Humor me with another restaurant',
    zh: '別的地方',
  },
  showMe: {
    en: 'Show me another restaurant',
    zh: '別的地方',
  },
}

const translations = {
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
  expandMyRadius: {
    en: 'Expand my search radius',
    zh: 'Expand my search radius',
  },
  withinRadius: (radius) => ({
    en: `within ${radius}m of your current location`,
    zh: `within ${radius}m of 你的 current location`,
  }),
}

export default {
  ...translations,
  ...skipTexts,
  ...headings,
}
