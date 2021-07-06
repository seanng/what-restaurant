import StickyFooter from 'components/StickyFooter'
import { loadingTexts } from 'data/translations'
import { getRandom } from 'utils/helpers'

export default function LoadingView({ language }) {
  return (
    <div className="container">
      <h1 className="text-xl md:text-3xl mb-2 md:mb-6 mt-16">
        {getRandom(loadingTexts)[language]}
      </h1>
      <StickyFooter />
    </div>
  )
}
