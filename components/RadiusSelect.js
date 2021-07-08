/* eslint-disable jsx-a11y/no-onchange */
import { radiuses } from 'utils/configs'
import t from 'data/translations'

export default function RadiusSelect({ onRadiusChange, language, radius }) {
  return (
    <div className="inline-flex text-base md:text-lg items-center">
      <span role="img" aria-labelledby="Distance: ">
        🚶🏻‍♂️
      </span>
      <select
        id="radiusSelect"
        className="mt-1 pl-0 pr-7 font-light text-gray-700 text-base border-transparent focus:outline-none md:text-xl ml-3"
        defaultValue={radius}
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
