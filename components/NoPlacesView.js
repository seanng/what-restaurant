import t from 'data/translations'
import RadiusSelect from 'components/RadiusSelect'
import Container from './Container'

export default function NoPlacesView({ language, onRadiusChange, radius }) {
  return (
    <Container>
      <p className="text-base md:text-2xl mt-16 mb-10">
        {t.noPlacesNearbyPrompt(radius)[language]}
      </p>
      <h1 className="text-3xl md:text-5xl mb-2 md:mb-6 uppercase">
        {t.noPlacesNearbyHeading[language]}
      </h1>
      <RadiusSelect
        radius={radius}
        language={language}
        onRadiusChange={onRadiusChange}
      />
    </Container>
  )
}
