import React from 'react'
import { SoarIconProps } from 'soar/Interfaces/iconInterfaces'

const MasterCardSvg: React.FC<SoarIconProps> = ({ className, onClick }) => {
  return (
    <svg
      width='30'
      height='30'
      viewBox='0 0 30 30'
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <circle cx='10' cy='12.5' r='10' fill='#9199AF' fillOpacity='0.5' />
      <circle cx='20' cy='12.5' r='10' fill='#9199AF' fillOpacity='0.5' />
    </svg>
  )
}

export default MasterCardSvg
