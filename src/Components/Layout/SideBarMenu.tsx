import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

// MUI Icons
import AccountSvg from '../Icons/AccountSvg'
import CreditCardSvg from '../Icons/CreditCardSvg'
import HomeSvg from '../Icons/HomeSvg'
import InvestmentsSvg from '../Icons/InvestmentSvg'
import LoansSvg from '../Icons/LoansSvg'
import PrivilegesSvg from '../Icons/PrivilegesSvg'
import ServicesSvg from '../Icons/ServicesSvg'
import SettingsFilledSvg from '../Icons/SettingsFilledSvg'
import SoarTaskSvg from '../Icons/SoarTaskSvg'
import TransactionsSvg from '../Icons/TransactionsSvg'

// Menu Items Array
const menuItems = [
  {
    label: 'Dashboard',
    path: '/dashboard',
    icon: <HomeSvg />,
  },
  { label: 'Transactions', path: '/transactions', icon: <TransactionsSvg /> },
  { label: 'Accounts', path: '/accounts', icon: <AccountSvg /> },
  {
    label: 'Investments',
    path: '/transactions/investments',
    icon: <InvestmentsSvg />,
  },
  {
    label: 'Credit Cards',
    path: '/transactions/creditCards',
    icon: <CreditCardSvg />,
  },
  {
    label: 'Loans',
    path: '/transactions/loans',
    icon: <LoansSvg />,
  },
  {
    label: 'Services',
    path: '/transactions/services',
    icon: <ServicesSvg />,
  },
  {
    label: 'My Privileges',
    path: '/transactions/myPrivileges',
    icon: <PrivilegesSvg />,
  },
  {
    label: 'Settings',
    path: '/settings',
    icon: <SettingsFilledSvg />,
  },
]

const SidebarMenu: React.FC = () => {
  // const location =
  const router = useLocation() // Get current route
  const [activePath, setActivePath] = useState(router.pathname)

  return (
    <aside className='w-64 bg-white border-r-[1px] h-screen overflow-y-auto'>
      <nav className=''>
        <div className='text-primary font-extrabold text-2xl p-5 flex flex-row'>
          <SoarTaskSvg className='mx-2 text-menu' /> Soar Task
        </div>
        <div className='mt-6'>
          {/* Menu Items */}
          <ul>
            {menuItems.map((item, index) => (
              <li key={index} onClick={() => setActivePath(item.path)}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-4 py-2 rounded-lg text-menuGrey hover:bg-gray-100 transition cursor-pointer
          ${activePath === item.path ? 'text-menu' : ''}
        `}
                >
                  {/* Highlighted Vertical Line */}
                  <span
                    className={`w-1 h-12 rounded-r-full ${
                      activePath === item.path ? 'bg-menu' : 'bg-transparent'
                    }`}
                  ></span>

                  {/* Icon */}
                  <span
                    className={`${
                      activePath === item.path ? 'text-menu' : 'text-gray-400'
                    }`}
                  >
                    {item.icon}
                  </span>

                  {/* Label */}
                  <span
                    className={`font-medium ${
                      activePath === item.path ? 'text-menu' : 'text-gray-400'
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  )
}

export default SidebarMenu
