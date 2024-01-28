import { useState } from 'react'

export const FilterCheckbox = ({ items, label, type }) => {
  const [selectedValue, setSelectedValue] = useState('')

  const handleChange = (e) => {
    setSelectedValue(e.target.value)
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h4 className="font-semibold mb-2">{label}</h4>
      <div className="flex flex-col space-y-2 overflow-y-auto max-h-96">
        {items.map((item, index) => (
          <label key={index} className="flex items-center space-x-2">
            <input
              type={type}
              name={
                type === 'radio'
                  ? 'filterRadioGroup'
                  : `filterCheckbox-${label}`
              }
              value={item}
              checked={type === 'radio' ? selectedValue === item : undefined}
              onChange={handleChange}
              className={`${
                type === 'radio' ? 'form-radio' : 'form-checkbox'
              } h-4 w-4 accent-violet-500`}
            />
            <span className="text-gray-700">{item}</span>
          </label>
        ))}
      </div>
    </div>
  )
}
