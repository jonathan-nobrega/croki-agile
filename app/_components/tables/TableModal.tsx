import { useEffect } from "react"
import { createPortal } from "react-dom"
import { useDispatch, useSelector } from "react-redux"
import modalEscapeHandlers from "@/app/_hooks/modalEscapeHandlers"
import { closeModal } from "@/app/_store/reducers/ModalReducer"
import ClientForm from "../forms/ClientForm"
import ProjectForm from "../forms/ProjectForm"


export default function TableModal() {
    const { isOpen, data } = useSelector((state: any) => state.modalSlice)
    const { title, tableForm } = useSelector((state: any) => state.moduleSlice)
    const dispatch = useDispatch()

    useEffect(() => {
        const escape = () => dispatch(closeModal())
        modalEscapeHandlers(escape)
    }, [isOpen])

    function chooseForm() {
        if (tableForm == 'ClientForm') return <ClientForm />
        if (tableForm == 'ProjectForm') return <ProjectForm />
    }

    return (
        <>
            {isOpen && createPortal(
                <div id='modal-root' className="w-screen h-screen fixed inset-0 flex items-center justify-center z-10 bg-gray-900 bg-opacity-30">
                    <div id='modal-container' className="w-1/2 h-96 rounded-lg bg-white shadow-md">
                        <div id='modal-form' className="h-full w-full">
                            {chooseForm()}
                        </div>
                    </div>
                </div>,
                document.body)
            }
        </>
    )
}