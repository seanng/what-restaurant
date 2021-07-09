import Stars from 'components/StarsSvg'
import RadiusSelect from 'components/RadiusSelect'
import Container from 'components/Container'
import t from 'data/translations'
// import banner from 'public/banner.jpg'
import { GOOGLE_PLACES_URL } from 'utils/constants'

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
    <Container>
      {/* <img alt="banner" className="w-full h-auto" src={banner} /> */}
      <p className="text-base md:text-2xl mt-8 mb-3 md:mt-12 md:mb-5 ">
        {heading}
      </p>
      <h1 className="text-3xl md:text-5xl font-bold mb-2 md:mb-6 ">
        <a href={googleMapLink} target="_blank" rel="noreferrer">
          {place.name}
        </a>
      </h1>
      <p className="text-xs md:text-lg leading-relaxed whitespace-prewrap mb-4 md:mb-7">
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
          className="mt-8 md:mt-13 h-auto max-h-80 w-full max-w-screen-sm rounded-lg object-cover object-center"
          src={place.photoUrl}
        />
      )}
      {shouldShowSkip && (
        <div className="mt-10 md:mt-16 mb-2 md:mb-4">
          <button
            type="button"
            className="inline-flex items-center px-6 py-3 uppercase whitespace-pre-wrap text-base md:text-2xl font-medium border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={onSkipClick}
          >
            {skipText}
          </button>
        </div>
      )}
      <RadiusSelect
        radius={radius}
        language={language}
        onRadiusChange={onRadiusChange}
      />
    </Container>
  )
}

export default MainViewB
