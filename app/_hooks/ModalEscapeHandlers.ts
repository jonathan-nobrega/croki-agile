export default function ModalEscapeHandlers(closeModal: any) {
    const modalContainer = document.getElementById('modal-root')

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') closeModal()
    }

    const handleClickOutside = (event: MouseEvent) => {
        if (event.target === modalContainer) closeModal()
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('click', handleClickOutside)

    return () => {
        document.removeEventListener('keydown', handleKeyDown)
        document.removeEventListener('click', handleClickOutside)
    }
}