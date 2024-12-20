// components/FormComponents/SoarDatePicker.tsx

import React from 'react'
import { Controller } from 'react-hook-form'
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { TextField } from '@mui/material'
import dayjs, { Dayjs } from 'dayjs'

interface SoarDatePickerProps {
  label: string
  name: string
  control: any
  rules?: any
  error?: string
}

const SoarDatePicker: React.FC<SoarDatePickerProps> = ({
  label,
  name,
  control,
  rules,
  error,
}) => {
  return (
    <div className='flex flex-col w-full'>
      {/* Label */}
      <label
        className={`font-inter text-normal text-base mb-2 ${
          error ? 'text-red-500' : 'text-[#232323]'
        }`}
      >
        {label}
      </label>

      {/* DatePicker */}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Controller
          name={name}
          control={control}
          rules={rules}
          render={({ field }) => (
            <DatePicker
              {...field}
              value={field.value || null}
              onChange={(date: Dayjs | null) => field.onChange(date)}
              slots={{
                textField: TextField,
              }}
              slotProps={{
                textField: {
                  placeholder: 'Select your date of birth',
                  error: Boolean(error),
                  helperText: error,
                  fullWidth: true,
                  size: 'small',
                  sx: {
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '15px',
                      borderColor: error ? '#FF0000' : '#DFEAF2',
                      height: '40px',
                      '& fieldset': {
                        borderColor: error ? '#FF0000' : '#DFEAF2',
                      },
                      paddingY: '0px',
                    },
                    '& .MuiInputBase-input': {
                      color: '#718EBF',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '1rem',
                      padding: '6px 12px',
                      height: '100%',
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: error ? '#FF0000' : '#DFEAF2',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: error ? '#FF0000' : '#DFEAF2',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: error ? '#FF0000' : '#DFEAF2',
                    },
                    '& input::placeholder': {
                      color: '#718EBF',
                      opacity: 1,
                    },
                  },
                },
              }}
            />
          )}
        />
      </LocalizationProvider>
    </div>
  )
}

export default SoarDatePicker
