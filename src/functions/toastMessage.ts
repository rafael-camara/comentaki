import { toast } from 'sonner'

export function toastMessage(message: string) {
  toast.error(message, {
    style: {
      background: '#ef4444',
      borderColor: '#ef4444',
      color: '#fff',
    },
  })
}
