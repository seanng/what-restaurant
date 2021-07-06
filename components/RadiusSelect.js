/* eslint-disable jsx-a11y/no-onchange */
import { radiuses } from 'utils/configs'
import t from 'data/translations'

export default function RadiusSelect({ onRadiusChange, language, radius }) {
  return (
    <select
      id="radiusSelect"
      className="mt-1 pl-0 pr-7 font-light text-gray-700 text-xs border-transparent focus:outline-none md:text-lg"
      defaultValue={radius}
      onChange={onRadiusChange}
    >
      {radiuses.map((val) => (
        <option key={val} value={val}>
          {t.withinRadius(val)[language]}
        </option>
      ))}
    </select>
  )
}
