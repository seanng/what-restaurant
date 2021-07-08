import { loadingTexts } from 'data/translations'
import { getRandom } from 'utils/helpers'
import Container from './Container'

export default function LoadingView({ language }) {
  return (
    <Container>
      <h1 className="text-xl md:text-3xl mb-2 md:mb-6 mt-16">
        {getRandom(loadingTexts)[language]}
      </h1>
    </Container>
  )
}
