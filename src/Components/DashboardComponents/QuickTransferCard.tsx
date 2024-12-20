import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SendSvg from '../Icons/SendSvg'
import SoarSearchField from '../FormComponents/SoarSearchField'
import Image from 'next/image'
import useNotification from 'soar/utils/useNotification'

const designations = ['CEO', 'Director', 'Designer', 'Engineer', 'Manager']

const QuickTransferCard = () => {
  const [users, setUsers] = useState<any[]>([])
  const [selectedUserIndex, setSelectedUserIndex] = useState<number | null>(
    null
  )
  const [amount, setAmount] = useState<string>('')
  const { showNotification } = useNotification()

  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://randomuser.me/api/?results=3')
      const fetchedUsers = response.data.results.map((user: any) => {
        const randomDesignation =
          designations[Math.floor(Math.random() * designations.length)]
        return {
          name: `${user.name.first} ${user.name.last}`,
          photo: user.picture.medium,
          designation: randomDesignation,
        }
      })
      setUsers(fetchedUsers)
      setSelectedUserIndex(null)
    } catch (error) {
      console.error('Error fetching users:', error)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  const handleUserSelect = (index: number) => {
    setSelectedUserIndex(index)
  }

  const handleNextUsers = () => {
    fetchUsers()
  }

  const handleSend = () => {
    // Validation checks
    if (selectedUserIndex === null) {
      showNotification('Please select a user before sending.', 'error')
      return
    }

    const selectedUser = users[selectedUserIndex]

    // Check if amount is a valid number (only digits)
    const numberRegex = /^[0-9]+(\.[0-9]+)?$/
    if (!amount || !numberRegex.test(amount)) {
      console.log('error')

      showNotification('Please enter a valid amount (numbers only).', 'error')
      return
    }

    // If all good
    console.log('Sending amount:', amount, 'to user:', selectedUser)
    showNotification(
      `Successfully sent ${amount} USD to ${selectedUser.name}`,
      'success'
    )
  }

  return (
    <div>
      <div className='text-lg font-bold font-lato text-primary mb-2'>
        Quick Transfer
      </div>
      <div
        className='w-full  p-4 bg-white border-[1px] rounded-[25px]'
        style={{ height: '250px' }}
      >
        <div className='flex items-center justify-between mb-4'>
          <div className='flex items-center gap-6'>
            {users.map((user, index) => (
              <div
                key={index}
                className={`flex flex-col items-center cursor-pointer transition`}
                onClick={() => handleUserSelect(index)}
              >
                <Image
                  src={user.photo}
                  alt={user.name}
                  width={70}
                  height={70}
                  className='w-16 h-16 object-cover rounded-full'
                />
                <div
                  className={`text-base text-center text-menu mt-2 ${
                    selectedUserIndex === index
                      ? 'opacity-100 font-bold'
                      : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  {user.name}
                </div>
                <div
                  className={`text-xs text-lightblue ${
                    selectedUserIndex === index
                      ? 'opacity-100 font-bold'
                      : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  {user.designation}
                </div>
              </div>
            ))}
          </div>
          <button
            className='w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200'
            onClick={handleNextUsers}
          >
            <span className='text-lg font-bold text-lightblue'>&gt;</span>
          </button>
        </div>

        <div className='flex items-center gap-4 mt-8'>
          <div className='text-lightblue min-w-24'>Write Amount</div>
          <SoarSearchField
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder='0.00'
            width='200px'
            endAdornment={
              <button
                onClick={handleSend}
                className='flex items-center gap-2 px-4 py-2 bg-menu text-white rounded-full'
              >
                Send
                <SendSvg />
              </button>
            }
            sx={{
              '& fieldset': {
                borderColor: 'none', // Default border
              },
              '&:hover fieldset': {
                borderColor: 'none', // Border on hover
              },
              '&.Mui-focused fieldset': {
                borderColor: 'none', // Border on focus
              },
              '& input': {
                color: 'none', // Input text color
              },
              '& .MuiOutlinedInput-inputAdornedEnd': {
                paddingRight: 0,
              },
              '& .MuiOutlinedInput-root': {
                paddingRight: 0,
              },
              '& .MuiOutlinedInput-adornedEnd': {
                paddingRight: 0,
              },
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default QuickTransferCard
