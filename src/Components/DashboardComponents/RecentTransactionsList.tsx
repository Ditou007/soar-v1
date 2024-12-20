import { CreditCardRounded } from '@mui/icons-material'
import React from 'react'
import PayPalSvg from '../Icons/PayPalSvg'
import DollarWithCircleSvg from '../Icons/DollarWithCircleSvg'
import { lightenColor } from 'soar/utils/colorHelper'
import AllCardsSvg from '../Icons/AllCardsSvg'

interface Transaction {
  icon: React.ReactNode // SVG Icon
  description: string
  date: string
  amount: number
  iconColor: string
}

const transactions: Transaction[] = [
  {
    icon: <AllCardsSvg />,
    description: 'Grocery Shopping',
    date: '2021-01-28',
    amount: -75.99,
    iconColor: '#FFBB38',
  },
  {
    icon: <PayPalSvg />,
    description: 'Salary',
    date: '2021-01-27',
    amount: 1500,
    iconColor: '#396AFF',
  },
  {
    icon: <DollarWithCircleSvg />,
    description: 'Electricity Bill',
    date: '2021-01-26',
    amount: -120.45,
    iconColor: '#16DBCC',
  },
]

const RecentTransactionsList: React.FC = () => {
  return (
    <div className='font-lato w-full'>
      {/* Heading outside of the card */}
      <div className='text-lg font-bold font-lato text-primary mb-2'>
        Recent Transactions
      </div>

      <div className='bg-white rounded-[25px] border-[1px] px-6 h-[235px]'>
        <ul className='h-full flex flex-col justify-evenly'>
          {transactions.map((transaction, index) => {
            // Lighter circle color (e.g., 40% lighter)
            const lighterCircleColor = lightenColor(transaction.iconColor, 70)

            return (
              <li key={index} className='flex items-center'>
                <div
                  className='w-[55px] h-[55px] flex items-center justify-center rounded-full'
                  style={{ backgroundColor: lighterCircleColor }}
                >
                  {/* Color the icon */}
                  <span style={{ color: transaction.iconColor }}>
                    {transaction.icon}
                  </span>
                </div>

                {/* Description and Date */}
                <div className='ml-4 font-inter min-w-[165px]'>
                  <div className='text-base font-medium text-menu'>
                    {transaction.description}
                  </div>
                  <div className='text-base text-lightblue font-normal'>
                    {transaction.date}
                  </div>
                </div>

                {/* Amount */}
                <div
                  className={`ml-auto text-sm font-bold ${
                    transaction.amount > 0 ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {transaction.amount > 0
                    ? `+$${transaction.amount}`
                    : `-$${Math.abs(transaction.amount)}`}
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default RecentTransactionsList
