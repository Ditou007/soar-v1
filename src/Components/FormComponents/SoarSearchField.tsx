import React from 'react'
import { TextField } from '@mui/material'
import { StandardTextFieldProps } from '@mui/material/TextField'
import { styled } from '@mui/material/styles'
import { soarColors } from 'soar/styles/soarColors'

// Style MUI TextField with pill-shaped rounded corners
const StyledTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#F5F7FA' : '#333',
  borderRadius: '9999px',
  '& .MuiOutlinedInput-root': {
    borderRadius: '9999px',
    '& fieldset': {
      borderColor: 'transparent', // Default border
    },
    '&:hover fieldset': {
      borderColor: soarColors.inputPlaceholderColor, // Border on hover
    },
    '&.Mui-focused fieldset': {
      borderColor: soarColors.inputPlaceholderColor, // Border on focus
    },
    '& input': {
      color: soarColors.inputPlaceholderColor, // Input text color
    },
    '& input::placeholder': {
      color: soarColors.inputPlaceholderColor, // Placeholder color
      opacity: 1,
    },
  },
}))

interface SoarSearchFieldProps extends StandardTextFieldProps {
  startAdornment?: React.ReactNode
  endAdornment?: React.ReactNode
  width?: string
}

const SoarSearchField: React.FC<SoarSearchFieldProps> = ({
  startAdornment,
  endAdornment,
  width,
  ...props
}) => {
  return (
    <StyledTextField
      sx={{ width: width }}
      variant='outlined'
      size='small'
      fullWidth
      InputProps={{
        startAdornment: startAdornment,
        endAdornment: endAdornment,
      }}
      {...props}
    />
  )
}

export default SoarSearchField
