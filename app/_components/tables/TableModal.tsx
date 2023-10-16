import { useEffect, useState } from "react"
import Button from "../utils/Button"
import ClientForm from "../forms/ClientForm"

export default function TableModal(
    { data, type, closeModal }: { data: any, type: string, closeModal: SwitchModal }
) {

    useEffect(() => {

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
    }, [closeModal])

    function modalForm() {
        if (type == 'clients') return <ClientForm data={data} />
        if (type == 'projects') return <ProjectsForm data={data} />
    }


    return (
        <div id='modal-root' className="w-screen h-screen fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-30">
            <div id='modal-container' className="w-1/2 h-96 rounded-lg bg-white shadow-md">
                <div id='modal-form' className="h-full w-full">
                    <section className="m-5 bg-white">
                        {modalForm()}
                    </section>
                    <section className="m-5 space-x-5">
                        <Button description="Update" type="A" />
                        <Button description="Cancel" type="B" action={closeModal} />
                    </section>
                </div>
            </div>
        </div>
    )
}