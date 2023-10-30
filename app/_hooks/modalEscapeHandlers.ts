import { useDispatch } from "react-redux"
import { closeModal } from "../_store/reducers/ModalReducer"

export default function modalEscapeHandlers(closefunction: any) {
    const modalContainer = document.getElementById('modal-root')

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') closefunction()
    }

    const handleClickOutside = (event: MouseEvent) => {
        if (event.target === modalContainer) closefunction()
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('click', handleClickOutside)

    return () => {
        document.removeEventListener('keydown', handleKeyDown)
        document.removeEventListener('click', handleClickOutside)
    }
}