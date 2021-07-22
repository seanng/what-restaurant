/* eslint-disable jsx-a11y/no-onchange */
import { Range, getTrackBackground } from 'react-range'
import { MIN_RADIUS, MAX_RADIUS, RADIUS_STEP } from 'utils/configs'
import t from 'data/translations'
import Card from './Card'

// TODO: change to use noUiSlider
// https://github.com/leongersen/noUiSlider
// OR https://github.com/mmarkelov/react-nouislider

export default function RadiusSlider({ radiusSliderOptions, language }) {
  const { onChange, onFinalChange, radius } = radiusSliderOptions

  return (
    <div className="mt-5">
      <Card>
        <p className="mb-5">{t.howFar[language]}</p>
        <Range
          values={[radius]}
          step={RADIUS_STEP}
          min={MIN_RADIUS}
          max={MAX_RADIUS}
          onFinalChange={onFinalChange}
          onChange={onChange}
          renderTrack={({ props, children }) => (
            <div className="flex flex-row items-center">
              <div
                {...props}
                className="w-full flex h-5"
                style={{
                  ...props.style,
                }}
              >
                <div
                  ref={props.ref}
                  className="rounded-md w-full h-2 self-center"
                  style={{
                    background: getTrackBackground({
                      values: [radius],
                      colors: ['#FCD228', '#A0A0A0'],
                      min: MIN_RADIUS,
                      max: MAX_RADIUS,
                    }),
                  }}
                >
                  {children}
                </div>
              </div>
              <div className="ml-5">{`${radius}m`}</div>
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: '20px',
                width: '20px',
                borderRadius: '50px',
                backgroundColor: '#FCD228',
              }}
            />
          )}
        />
      </Card>
    </div>
  )
}
