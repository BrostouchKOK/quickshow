import React from 'react'

const Loading = () => {
  return (
    <div className='flex items-center justify-center h-[80vh]'>
      <div className='animate-spin w-14 h-14 rounded-full border-2 border-t-primary'></div>
    </div>
  )
}

export default Loading
