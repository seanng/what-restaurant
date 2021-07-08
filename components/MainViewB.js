import Stars from 'components/Stars'
import RadiusSelect from 'components/RadiusSelect'
import t from 'data/translations'
import { GOOGLE_PLACES_URL } from 'utils/constants'
import StickyFooter from 'components/StickyFooter'

function MainViewB({
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
      <p className="text-base md:text-2xl mt-12 mb-6 md:mt-16 md:mb-10 ">
        {heading}
      </p>
      <h1 className="text-3xl md:text-5xl font-bold mb-2 md:mb-6 ">
        <a href={googleMapLink} target="_blank" rel="noreferrer">
          {place.name}
        </a>
      </h1>
      <p className="text-xs md:text-lg leading-relaxed whitespace-pre mb-4 md:mb-7">
        <a href={googleMapLink} target="_blank" rel="noreferrer">
          {`📍  ${place.vicinity}`}
        </a>
        <span className="ml-2 text-green-600">{`${distance} away`}</span>
      </p>
      {place.rating && (
        <div className="inline-flex text-base md:text-lg items-center">
          <span role="img" aria-labelledby="Rating">
            🤔
          </span>
          <Stars rating={place.rating} />
          <div>{` (${place.rating})`}</div>
        </div>
      )}
      {place.price_level && (
        <h2 className="text-base md:text-lg mt-2 md:mt-4 whitespace-pre">
          {`💰   ${t[`priceLevel${place.price_level}`][language]}`}
        </h2>
      )}
      {place.photoUrl && (
        <img
          alt="img"
          className="mt-8 md:mt-13 h-auto w-96 rounded-lg"
          src={place.photoUrl}
        />
      )}
      {shouldShowSkip && (
        <div className="mt-10 md:mt-16 mb-4 md:mb-8">
          <span
            aria-hidden
            onClick={onSkipClick}
            className="cursor-pointer whitespace-pre uppercase font-semibold text-base md:text-2xl text-blue-700"
          >
            {`💁🏻   ${skipText} `}
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

export default MainViewB
