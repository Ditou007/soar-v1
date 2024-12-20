import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import SoarCustomTextField from '../FormComponents/SoarCustomTextField'
import SoarDatePicker from './SoarDatePicker'

interface EditProfileFormProps {
  onSubmit: (data: any) => void
}

const EditProfileForm: React.FC<EditProfileFormProps> = ({ onSubmit }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm()

  return (
    <div className='p-10'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
          {/* Your Name */}
          <div>
            <Controller
              name='yourName'
              control={control}
              rules={{
                required: 'Your Name is required',
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: 'Only letters and spaces allowed',
                },
              }}
              render={({ field, fieldState }) => (
                <SoarCustomTextField
                  label='Your Name'
                  placeholder='Enter your full name'
                  {...field}
                  error={fieldState.error?.message}
                />
              )}
            />
          </div>

          {/* User Name */}
          <div>
            <Controller
              name='username'
              control={control}
              rules={{
                required: 'Username is required',
                pattern: {
                  value: /^[A-Za-z0-9]+$/,
                  message: 'Only alphanumeric characters allowed',
                },
              }}
              render={({ field, fieldState }) => (
                <SoarCustomTextField
                  label='User Name'
                  placeholder='Enter your username'
                  {...field}
                  error={fieldState.error?.message}
                />
              )}
            />
          </div>

          {/* Email */}
          <div>
            <Controller
              name='email'
              control={control}
              rules={{
                required: 'Email is required',
                pattern: {
                  value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                  message: 'Invalid email address',
                },
              }}
              render={({ field, fieldState }) => (
                <SoarCustomTextField
                  label='Email'
                  placeholder='Enter your email'
                  {...field}
                  error={fieldState.error?.message}
                  type='email'
                />
              )}
            />
          </div>

          {/* Password */}
          <div>
            <Controller
              name='password'
              control={control}
              rules={{
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters',
                },
              }}
              render={({ field, fieldState }) => (
                <SoarCustomTextField
                  label='Password'
                  placeholder='Enter your password'
                  {...field}
                  error={fieldState.error?.message}
                  type='password'
                />
              )}
            />
          </div>

          {/* Date of Birth */}
          <div>
            <SoarDatePicker
              label='Date of Birth'
              name='dateOfBirth'
              control={control}
              rules={{
                required: 'Date of Birth is required',
              }}
              error={errors.dateOfBirth?.message?.toString()}
            />
          </div>

          {/* Present Address */}
          <div>
            <Controller
              name='presentAddress'
              control={control}
              rules={{
                required: 'Present Address is required',
              }}
              render={({ field, fieldState }) => (
                <SoarCustomTextField
                  label='Present Address'
                  placeholder='Enter your present address'
                  {...field}
                  error={fieldState.error?.message}
                />
              )}
            />
          </div>

          {/* Permanent Address */}
          <div>
            <Controller
              name='permanentAddress'
              control={control}
              rules={{
                required: 'Permanent Address is required',
              }}
              render={({ field, fieldState }) => (
                <SoarCustomTextField
                  label='Permanent Address'
                  placeholder='Enter your permanent address'
                  {...field}
                  error={fieldState.error?.message}
                />
              )}
            />
          </div>

          {/* City */}
          <div>
            <Controller
              name='city'
              control={control}
              rules={{
                required: 'City is required',
              }}
              render={({ field, fieldState }) => (
                <SoarCustomTextField
                  label='City'
                  placeholder='Enter your city'
                  {...field}
                  error={fieldState.error?.message}
                />
              )}
            />
          </div>

          {/* Postal Code */}
          <div>
            <Controller
              name='postalCode'
              control={control}
              rules={{
                required: 'Postal Code is required',
                pattern: {
                  value: /^[A-Za-z0-9\s\-]+$/,
                  message: 'Invalid postal code',
                },
              }}
              render={({ field, fieldState }) => (
                <SoarCustomTextField
                  label='Postal Code'
                  placeholder='Enter your postal code'
                  {...field}
                  error={fieldState.error?.message}
                />
              )}
            />
          </div>

          {/* Country */}
          <div>
            <Controller
              name='country'
              control={control}
              rules={{
                required: 'Country is required',
              }}
              render={({ field, fieldState }) => (
                <SoarCustomTextField
                  label='Country'
                  placeholder='Enter your country'
                  {...field}
                  error={fieldState.error?.message}
                />
              )}
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className='flex justify-end mt-6'>
          <button
            type='submit'
            className='px-6 py-2 bg-[#232323] text-white rounded-full hover:bg-[#343C6A]'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditProfileForm
