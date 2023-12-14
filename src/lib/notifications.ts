import Swal from 'sweetalert2'

type typeIcon = 'info' | 'success' | 'warning' | 'error' | 'question'

interface interfaceSwal {
  title: string
  text?: string
  html?: string
  icon: typeIcon
  cancelButton?: string
  confirmButton?: string
}

export const notification = async (obj: interfaceSwal) => {
  const status = await Swal.fire({
    titleText: obj.title,
    text: obj.text,
    html: obj.html,
    icon: obj.icon,
    showCancelButton: obj.cancelButton ? true : false,
    cancelButtonText: obj.cancelButton,
    showConfirmButton: true,
    confirmButtonText: obj.confirmButton ? obj.confirmButton : 'OK'
  })
  return status.isConfirmed
}
