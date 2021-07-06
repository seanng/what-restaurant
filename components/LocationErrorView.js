import StickyFooter from 'components/StickyFooter'
import t from 'data/translations'

export default function LocationErrorView({ language }) {
  return (
    <div className="container">
      <p className="text-base md:text-2xl mt-16 mb-10">
        {t.enableLocationPrompt[language]}
      </p>
      <h1 className="text-3xl md:text-5xl mb-2 md:mb-6">
        {t.enableLocationHeading[language]}
      </h1>
      <StickyFooter />
    </div>
  )
}
