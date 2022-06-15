import React from 'react'

export default function CustomCheckBox({ value, onChange }) {
  return (
    <div className='block pl-2'>
      <div className='mt-2'>
        <label className='inline-flex items-center'>
          <input
            checked={value}
            onChange={onChange}
            type='checkbox'
            className='w-8 h-8 rounded-full text-green-600 focus:ring-0 focus:outline-white'
          />
        </label>
      </div>
    </div>
  )
}
