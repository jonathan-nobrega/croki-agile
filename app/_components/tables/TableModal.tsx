import { useEffect } from "react"
import { createPortal } from "react-dom"
import { useDispatch, useSelector } from "react-redux"
import modalEscapeHandlers from "@/app/_hooks/modalEscapeHandlers"
import { closeModal } from "@/app/_store/reducers/ModalReducer"


export default function TableModal() {
    const { isOpen, layout } = useSelector((state: any) => state.modalSlice)
    const dispatch = useDispatch()

    useEffect(() => {
        const escape = () => dispatch(closeModal())
        modalEscapeHandlers(escape)
    }, [isOpen])

    return (
        <>
            {isOpen && createPortal(
                <div id='modal-root' className="w-screen h-screen fixed inset-0 flex items-center justify-center z-10 bg-gray-900 bg-opacity-30">
                    <div id='modal-container' className="w-1/2 h-96 rounded-lg bg-white shadow-md">
                        <div id='modal-form' className="h-full w-full">
                            {layout()}
                        </div>
                    </div>
                </div>,
                document.body)
            }
        </>
    )
}