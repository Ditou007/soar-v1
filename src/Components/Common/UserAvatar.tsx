// components/UserAvatar.tsx

import EditIcon from '@mui/icons-material/Edit'
import { Avatar } from '@mui/material'
import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'soar/redux/store'
import useNotification from 'soar/utils/useNotification'

interface UserAvatarProps {
  editable?: boolean
  size?: number
}

const UserAvatar: React.FC<UserAvatarProps> = ({
  editable = false,
  size = 80,
}) => {
  const user = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()
  const { showNotification } = useNotification()
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleEditClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className='relative inline-block'>
      <Avatar
        src={user.avatarUrl}
        alt={user.name}
        sx={{ width: size, height: size }}
        className='rounded-full'
      />
      {editable && (
        <>
          <button
            onClick={handleEditClick}
            className='absolute -bottom-2 -right-2 bg-white border border-gray-300 rounded-full p-1 hover:bg-gray-100 transition-colors duration-200 z-10'
            aria-label='Edit Avatar'
          >
            <EditIcon fontSize='small' />
          </button>
        </>
      )}
    </div>
  )
}

export default UserAvatar
