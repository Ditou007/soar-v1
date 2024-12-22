// components/Loading.tsx

import React from 'react'
import SoarTaskSvg from '../Icons/SoarTaskSvg'

const Loading: React.FC = () => {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='flex flex-col items-center'>
        <SoarTaskSvg className='mx-2 text-menu' />
        <p className='text-gray-700 text-lg'>Loading...</p>
      </div>
    </div>
  )
}

export default Loading
