export default function Input({ inputValue, placeholder }) {
  return (
    <>
      <label>
        <input
          maxLength='20'
          className='form-control
                    block
                    w-full
                    h-16
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                   
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
          type='text'
          ref={inputValue}
          placeholder={placeholder}
        />
      </label>
    </>
  )
}
