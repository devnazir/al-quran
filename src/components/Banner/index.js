function Banner({ children }) {
  return (
    <div className='overflow-hidden relative bg-gradient-to-r from-purple-300 to-purple-500 h-48 2-24 mt-6 mb-6 rounded-xl flex justify-center items-center'>
      {children}
      <div className='bg-laptop bg-cover absolute w-36 h-full right-0 mix-blend-lighten transform scale-150 translate-y-6'></div>
    </div>
  )
}

export default Banner