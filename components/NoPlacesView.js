import t from 'data/translations'
import StickyFooter from 'components/StickyFooter'
import RadiusSelect from 'components/RadiusSelect'

export default function NoPlacesView({ language, onRadiusChange, radius }) {
  return (
    <div className="container">
      <p className="text-base md:text-2xl mt-16 mb-10">
        {t.noPlacesNearbyPrompt(radius)[language]}
      </p>
      <h1 className="text-3xl md:text-5xl mb-2 md:mb-6">
        {t.noPlacesNearbyHeading[language]}
      </h1>
      <RadiusSelect
        radius={radius}
        language={language}
        onRadiusChange={onRadiusChange}
      />
      <StickyFooter />
    </div>
  )
}
