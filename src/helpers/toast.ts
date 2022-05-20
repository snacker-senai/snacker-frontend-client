import { toast } from 'react-toastify'

export const emitSuccessToast = (message: string) => {
    toast.success(message)
}

export const emitInfoToast = (message: string) => {
    toast.info(message)
}