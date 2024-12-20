import Image from 'next/image'
import React from 'react'
import { SoarIconProps } from 'soar/Interfaces/iconInterfaces'

const CardChipSvg: React.FC<SoarIconProps> = ({ className }) => {
  return (
    <Image
      className={className}
      src='/Chip_CardPNG.png'
      alt='card-chip'
      width={500}
      height={300}
      layout='intrinsic'
    />
  )
}

export default CardChipSvg
