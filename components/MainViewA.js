import Stars from 'components/Stars'
import RadiusSelect from 'components/RadiusSelect'
import t from 'data/translations'
import { GOOGLE_PLACES_URL } from 'utils/constants'
import StickyFooter from 'components/StickyFooter'

function MainViewA({
  heading,
  skipText,
  place,
  language,
  onSkipClick,
  onRadiusChange,
  radius,
  shouldShowSkip,
  distance,
}) {
  const googleMapLink = `${GOOGLE_PLACES_URL}/?api=1&query=${place.vicinity}&query_place_id=${place.place_id}`

  return (
    <div className="container">
      <p className="text-base md:text-2xl mt-12 mb-6 md:mt-16 md:mb-10 uppercase">
        {heading}
      </p>
      <h1 className="text-3xl md:text-5xl mb-2 md:mb-6 uppercase">
        <a href={googleMapLink} target="_blank" rel="noreferrer">
          {place.name}
        </a>
      </h1>
      <p className="text-xs md:text-lg leading-relaxed mb-4 md:mb-7">
        <a href={googleMapLink} target="_blank" rel="noreferrer">
          {place.vicinity}
        </a>
        <span className="ml-4 text-green-600">{`${distance} away`}</span>
      </p>
      {place.rating && (
        <div className="inline-flex -ml-3">
          <Stars rating={place.rating} />
          <h2 className="text-base md:text-lg">{` (${place.rating})`}</h2>
        </div>
      )}
      {place.price_level && (
        <h2 className="text-base md:text-lg mt-2 md:mt-4 whitespace-pre">
          {t[`priceLevel${place.price_level}`][language]}
        </h2>
      )}
      {shouldShowSkip && (
        <div className="mt-10 md:mt-16 mb-4 md:mb-8">
          <span
            aria-hidden
            onClick={onSkipClick}
            className="cursor-pointer uppercase font-semibold text-base md:text-2xl text-blue-700"
          >
            {skipText}
          </span>
        </div>
      )}
      <RadiusSelect
        radius={radius}
        language={language}
        onRadiusChange={onRadiusChange}
      />
      <StickyFooter />
    </div>
  )
}

export default MainViewA
