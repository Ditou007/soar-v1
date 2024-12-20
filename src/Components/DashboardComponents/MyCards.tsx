import React from 'react'
import SoarCreditCard from './SoarCreditCard'

interface MyCardsProps {
  cardData: {
    balance: string
    cardNumber: string
    cardHolder: string
    validThru: string
    chipIcon: React.ReactNode
    cardTypeIcon: React.ReactNode
    cardType: string
  }[]
}

const MyCards: React.FC<MyCardsProps> = ({ cardData }) => {
  return (
    <div>
      <div className='flex items-center mb-2 w-full'>
        <div className='text-lg font-bold font-sans text-primary'>My Cards</div>
        <div className='ml-auto'>
          <button className='text-primary font-bold font-sans'>See All</button>
        </div>
      </div>
      <div className='overflow-x-auto'>
        <div className='flex gap-4  pb-2 w-full'>
          {cardData.map((card, index) => (
            <div key={index} className='flex-1'>
              <SoarCreditCard
                cardType={card.cardType}
                balance={card.balance}
                cardNumber={card.cardNumber}
                cardHolder={card.cardHolder}
                validThru={card.validThru}
                chipIcon={card.chipIcon}
                cardTypeIcon={card.cardTypeIcon}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MyCards
