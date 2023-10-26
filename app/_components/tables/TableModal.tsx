import { ReactElement } from "react"
import { createPortal } from "react-dom"
import { useSelector } from "react-redux"

export default function TableModal(
    { child }: { child: ReactElement }
) {
    const { open } = useSelector((state: any) => state.modalSlice)

    return (
        <>
            {open && createPortal(
                <div id='modal-root' className="w-screen h-screen fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-30">
                    <div id='modal-container' className="w-1/2 h-96 rounded-lg bg-white shadow-md">
                        <div id='modal-form' className="h-full w-full">
                            {child}
                        </div>
                    </div>
                </div>,
                document.body)}
        </>
    )
}