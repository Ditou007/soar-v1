import React, { useState } from 'react'
import AppLayout from 'soar/Components/Layout/AppLayout'
import EditProfileForm from '../FormComponents/EditProfileForm'
import UserAvatar from '../Common/UserAvatar'

const Settings: React.FC = () => {
  // Tabs: 'editProfile', 'preferences', 'security'
  const [activeTab, setActiveTab] = useState<
    'editProfile' | 'preferences' | 'security'
  >('editProfile')

  const onSubmit = (data: any) => {
    console.log(data)
  }

  // Styles for tabs
  const tabClasses = (tabName: 'editProfile' | 'preferences' | 'security') => {
    const isActive = activeTab === tabName
    return `
      relative cursor-pointer pb-2 
      ${isActive ? 'text-menu font-bold' : 'text-lightblue hover:text-menu'}
      ${
        isActive
          ? 'after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-menu after:rounded-t-md'
          : ''
      }
    `
  }

  return (
    <AppLayout title='Settings'>
      <div className='h-screen bg-background text-dark font-sans p-2'>
        <div className='bg-white border-[1px] rounded-[25px] p-4'>
          <div className='flex gap-6 border-b border-[#DFEAF2]'>
            <div
              className={tabClasses('editProfile')}
              onClick={() => setActiveTab('editProfile')}
            >
              Edit Profile
            </div>
            <div
              className={tabClasses('preferences')}
              onClick={() => setActiveTab('preferences')}
            >
              Preferences
            </div>
            <div
              className={tabClasses('security')}
              onClick={() => setActiveTab('security')}
            >
              Security
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === 'editProfile' && (
            <div className='flex flex-col md:flex-row items-center md:items-start gap-6 mt-10'>
              {/* Avatar Section */}
              <div className='flex justify-center'>
                <UserAvatar editable={true} size={100} />
              </div>
              {/* Edit Profile Form */}
              <div className='w-full'>
                <EditProfileForm onSubmit={onSubmit} />
              </div>
            </div>
          )}
          {activeTab === 'preferences' && (
            <div>
              {/* Preferences content goes here */}
              <p className='text-base text-menu'>
                Preferences content placeholder
              </p>
            </div>
          )}
          {activeTab === 'security' && (
            <div>
              {/* Security content goes here */}
              <p className='text-base text-menu'>
                Security content placeholder
              </p>
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  )
}

export default Settings
