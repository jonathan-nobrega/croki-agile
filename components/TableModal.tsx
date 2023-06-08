import { useEffect } from "react"
import Button from "./Button"

export default function TableModal(
    { content, closeModal }: { content: content | any, closeModal: closeModal }
) {
    const { name, company, email, phone, address } = content

    const fields: inputField[] = [
        { description: 'name', value: name, type: 'text', size: 1 },
        { description: 'company', value: company, type: 'text', size: 1 },
        { description: 'email', value: email, type: 'email', size: 1 },
        { description: 'phone', value: phone, type: 'text', size: 1 },
        { description: 'address', value: address, type: 'text', size: 2 },
    ]

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


    return (
        <div id='modal-root' className="w-screen h-screen fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-30">
            <div id='modal-container' className="w-1/2 h-96 p-0 rounded-lg bg-white shadow-md">
                <div id='modal-body' className="flex flex-col p-0 m-0 justify-between h-full w-full">
                    <section className="m-5 bg-white">
                        <h1 className="mb-5 text-xl text-gray-700 font-semibold">Client details</h1>
                        <div className="grid grid-cols-2 gap-3">
                            {fields.map((item) => (
                                <div className={`col-span-${item.size}`}>
                                    <label htmlFor={item.description} className="block py-1 font-semibold text-sm w-full">
                                        {item.description.charAt(0).toUpperCase() + item.description.slice(1)}
                                    </label>
                                    <input
                                        type={item.type}
                                        id={item.description}
                                        placeholder={item.value}
                                        className="border p-2 rounded-md w-full"
                                    />
                                </div>
                            ))}
                        </div>
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

interface inputField {
    description: string
    value: string
    type: 'text' | 'email' | 'number'
    size: number
}


interface content {
    _id: string
    isActive: boolean
    name: string
    company: string
    email: string
    phone: string
    address: string
}

type closeModal = () => void

const placeholderContent: any = {
    "_id": "64750ee7508365255806fdec",
    "isActive": false,
    "name": "Ingrid Finley",
    "company": "UNI",
    "email": "ingridfinley@uni.com",
    "phone": "+1 (951) 406-2811",
    "address": "383 Veronica Place, Rivers, Maryland, 8278"
}