import {
  AccountCircle,
  Notifications,
  Search,
  Settings,
} from '@mui/icons-material'
import MenuIcon from '@mui/icons-material/Menu'
import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleSidebar } from 'soar/redux/slices/sidebarSlice'
import SoarSearchField from '../FormComponents/SoarSearchField'
import UserAvatar from '../Common/UserAvatar'
import BellSvg from '../Icons/BellSvg'
import GearUnFilled from '../Icons/GearUnFilled'

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const dispatch = useDispatch()

  const handleSidebarToggle = () => {
    dispatch(toggleSidebar())
  }

  return (
    <header className='flex flex-col md:flex-row items-start md:items-center bg-white border-b-[1px]'>
      {/* Main row */}
      <div className='flex items-center justify-between w-full px-4 py-3'>
        <div className='flex items-center md:flex-grow-0 flex-grow'>
          <button
            onClick={handleSidebarToggle}
            className='text-gray-600 hover:text-primary focus:outline-none text-2xl ml-4 md:mr-6'
            aria-label='Toggle Sidebar'
          >
            <MenuIcon />
          </button>
        </div>

        <div className='absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none md:left-0 text-lg md:text-2xl font-semibold text-primary truncate'>
          {title}
        </div>

        <div className='hidden md:flex flex-1 mx-4 justify-end'>
          <SoarSearchField
            width='250px'
            placeholder='Search...'
            startAdornment={
              <Search style={{ color: '#8BA3CB', margin: '5px' }} />
            }
          />
        </div>

        {/* Right Section: Icons */}
        <div className='flex items-center space-x-4'>
          <div
            className='min-w-[50px] min-h-[50px] flex items-center justify-center rounded-full'
            style={{ backgroundColor: '#F5F7FA' }}
          >
            <button className='hidden sm:block p-2 text-gray-600 hover:text-gray-800 transition'>
              <GearUnFilled />
            </button>
          </div>
          <div
            className='min-w-[50px] min-h-[50px] flex items-center justify-center rounded-full'
            style={{ backgroundColor: '#F5F7FA' }}
          >
            <button className='hidden sm:block p-2 text-gray-600 hover:text-gray-800 transition'>
              <BellSvg />
            </button>
          </div>
          <button className='p-2 text-gray-600 hover:text-gray-800 transition'>
            <UserAvatar editable={false} size={40} />
          </button>
        </div>
      </div>

      <div className='md:hidden w-full px-4 pb-3'>
        <SoarSearchField
          width='100%'
          placeholder='Search...'
          startAdornment={
            <Search style={{ color: '#8BA3CB', margin: '5px' }} />
          }
        />
      </div>
    </header>
  )
}

export default Header
