import React, { useEffect } from 'react'
// import SidebarMenu from './SidebarMenu'
import Header from './Header'
import { useDispatch, useSelector } from 'react-redux'
import SidebarMenu from './SideBarMenu'
import { closeSidebar, openSidebar } from 'soar/redux/slices/sidebarSlice'

interface AppLayoutProps {
  children: React.ReactNode
  title: string
}

const AppLayout: React.FC<AppLayoutProps> = ({ children, title }) => {
  const isOpen = useSelector((state: any) => state.sidebar.isOpen)

  const dispatch = useDispatch()

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1400) {
        dispatch(closeSidebar())
      } else {
        dispatch(openSidebar())
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [dispatch])

  return (
    <div className='flex h-screen'>
      <div className={`transition-all duration-300 ${isOpen ? 'w-64' : 'w-0'}`}>
        <SidebarMenu />
      </div>

      <div className='flex-1 flex flex-col h-full overflow-hidden'>
        <Header title={title} />
        <div className='flex-1 overflow-auto p-5 bg-[#F8FAFE]'>{children}</div>
      </div>
    </div>
  )
}

export default AppLayout
