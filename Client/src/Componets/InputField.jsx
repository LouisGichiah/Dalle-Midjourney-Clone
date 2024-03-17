import React from 'react'

const InputField = ({ placeholder, name, type, labelName, value, handleTransformation, isSupriseMe, handleSupriseMe}) => {
  return (
    <div>
      <div className='mb-2 gap-2 flex items-center'>
    <label
    htmlFor={name}
    className='text-gray-900 font medium text-sm block'
    >
      {labelName}
    </label>
    {isSupriseMe && (
      <button
        className='text-xs py-1 px-2 font-semibold text-xs bg-[#ECECF1] rounded-[4px] text-black'
      >
       Surprise Me
      </button>
    )}
      </div>
      <input
        className='text-gray-900 bg-gray-50 border-gray-300 rounded-lg text-sm focus:ring-[#6469ff] focus:border-[#4649ff] block w-full p-3 outline-none border'
        id={name}
        type={type}
        placeholder={placeholder}     
        name={name}
        value={value}
        onChange={handleTransformation}
        required
      />
    </div>
  )
}

export default InputField