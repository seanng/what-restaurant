/* eslint-disable jsx-a11y/no-onchange */
import { radiuses, INITIAL_RADIUS } from 'utils/configs'
import Stars from 'components/Stars'
import t from 'data/translations'
import { GOOGLE_PLACES_URL } from 'utils/constants'

function MainView({
  // mode,
  heading,
  skipText,
  place,
  language,
  onSkipClick,
  onRadiusChange,
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
      <select
        id="radiusSelect"
        className="mt-1 pl-0 pr-7 font-extralight text-gray-400 text-xs border-transparent focus:outline-none md:text-lg"
        defaultValue={INITIAL_RADIUS}
        onChange={onRadiusChange}
      >
        {radiuses.map((val) => (
          <option key={val} value={val}>
            {t.withinRadius(val)[language]}
          </option>
        ))}
      </select>
    </div>
  )
}

export default MainView
