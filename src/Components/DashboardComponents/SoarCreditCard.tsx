import React from 'react'

interface SoarCreditCardProps {
  balance: string
  cardNumber: string
  cardHolder: string
  validThru: string
  cardTypeIcon: React.ReactNode
  chipIcon: React.ReactNode
  cardType: string
}

const SoarCreditCard: React.FC<SoarCreditCardProps> = ({
  balance,
  cardNumber,
  cardHolder,
  validThru,
  cardTypeIcon,
  chipIcon,
  cardType,
}) => {
  let newCardColor: string
  let newCardBottomColor: string
  let textColor: string
  let headingColor: string

  if (cardType === 'dark') {
    newCardColor = 'linear-gradient(107.38deg, #5B5A6F 2.61%, #000000 101.2%)'
    newCardBottomColor =
      'linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 100%)'
    textColor = '#FFFFFF'
    headingColor = '#FFFFFF'
  } else {
    newCardColor = 'white'
    newCardBottomColor =
      'linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%)'
    textColor = '#343C6A'
    headingColor = '#718EBF'
  }

  return (
    <div
      className='relative  rounded-[25px]  border-[1px] min-w-[350px] min-h-[235px] items-left'
      style={{
        background: newCardColor,
        color: textColor,
      }}
    >
      <div className='p-4 flex justify-between items-center font-lato'>
        <div>
          <div className='text-normal' style={{ color: headingColor }}>
            Balance
          </div>
          <div className='text-2xl font-semibold'>${balance}</div>
        </div>
        <div className='w-12 h-8'>{chipIcon}</div>
      </div>
      <div className='p-4 flex items-center'>
        <div>
          <div className='text-sm font-normal' style={{ color: headingColor }}>
            CARD HOLDER
          </div>
          <div className='text-base font-semibold'>{cardHolder}</div>
        </div>
        <div className='flex flex-col text-left ml-16'>
          <div className='font-normal text-sm' style={{ color: headingColor }}>
            VALID THRU
          </div>
          <div className='text-lg font-semibold'>{validThru}</div>
        </div>
      </div>
      <div
        className={`absolute bottom-0 left-0 right-0 flex justify-between items-center px-4 py-2 ${
          cardType !== 'dark' ? 'border-t-[1px] border-[#DFEAF2]' : ''
        }`}
        style={{
          background: newCardBottomColor,
          minHeight: '70px',
        }}
      >
        <div className='text-xl font-semibold tracking-widest'>
          {cardNumber}
        </div>
        <div>{cardTypeIcon}</div>
      </div>
    </div>
  )
}

export default SoarCreditCard
