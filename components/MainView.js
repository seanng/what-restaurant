import Stars from 'components/Stars'
import RadiusSelect from 'components/RadiusSelect'
import t from 'data/translations'
import { GOOGLE_PLACES_URL } from 'utils/constants'
import StickyFooter from 'components/StickyFooter'

function MainView({
  heading,
  skipText,
  place,
  language,
  onSkipClick,
  onRadiusChange,
  radius,
  distance,
}) {
  const googleMapLink = `${GOOGLE_PLACES_URL}/?q=place_id:${place.place_id}`

  return (
    <div className="container">
      <p className="text-base md:text-2xl mt-16 mb-10">{heading}</p>
      <h1 className="text-3xl md:text-5xl mb-2 md:mb-6">
        <a href={googleMapLink} target="_blank" rel="noreferrer">
          {place.name}
        </a>
      </h1>
      <p className="text-xs md:text-lg leading-relaxed mb-10 md:mb-16">
        <a href={googleMapLink} target="_blank" rel="noreferrer">
          {place.vicinity}
        </a>
        <span className="ml-4 text-green-600">{`${distance} away`}</span>
      </p>
      {place.rating && (
        <div className="inline-flex">
          <Stars rating={place.rating} />
          <h2 className="text-lg md:text-2xl">{` (${place.rating})`}</h2>
        </div>
      )}
      {place.price_level && (
        <h2 className="text-lg md:text-2xl mt-6 md:mt-12">
          {t[`priceLevel${place.price_level}`][language]}
        </h2>
      )}
      <div className="mt-10 md:mt-16 mb-2 md:mb-5">
        <span
          aria-hidden
          onClick={onSkipClick}
          className="cursor-pointer uppercase font-semibold text-base md:text-2xl"
        >
          {skipText}
        </span>
      </div>
      <RadiusSelect
        radius={radius}
        language={language}
        onRadiusChange={onRadiusChange}
      />
      <StickyFooter />
    </div>
  )
}

export default MainView
