import { SnackbarKey, useSnackbar } from 'notistack'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

const useNotification = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  const showNotification = (
    message: string,
    variant: 'success' | 'error' | 'warning' | 'info'
  ) => {
    const action = (key: SnackbarKey) => (
      <IconButton color='inherit' onClick={() => closeSnackbar(key)}>
        <CloseIcon />
      </IconButton>
    )

    enqueueSnackbar(message, { variant, action })
  }

  const closeNotification = (key: string) => {
    closeSnackbar(key)
  }

  return { showNotification, closeNotification }
}

export default useNotification
