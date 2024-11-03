import React from 'react'

function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
    <p className="ml-4 text-xl text-blue-500">Loading <span className='animate-bounce'>...</span></p>
  </div>
  )
}

export default Loading