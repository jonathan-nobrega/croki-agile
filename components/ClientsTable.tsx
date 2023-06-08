import { createPortal } from 'react-dom'
import seed from '../seed.json'
import Button from './Button'
import TableModal from './TableModal'
import { useEffect, useState } from 'react'
import TableRow from './TableRow'

const tableHeaders = ['Name', 'Company', 'Email', 'Phone', 'Status']

export default function ClientsTable() {
    const [showModal, setShowModal] = useState(false)
    const [modalContent, setModalContent] = useState({})

    const props = {
        title: 'Clients',
        description: 'List of all customer entities including child and parent accounts.',
        actionButton: 'Add customer'
    }

    function switchModal(payload: any) {
        if (payload) setModalContent(payload)
        setShowModal(!showModal)
    }

    return (
        <>
            <div className='flex flex-col h-full w-full p-5 space-y-3 border rounded-lg shadow-md'>
                <section className='flex mb-5 justify-between items-center bg-white'>
                    <div>
                        <h1 className='text-xl text-gray-700 font-semibold'>{props.title}</h1>
                        <p className='mt-2'>{props.description}</p>
                    </div>
                    <Button type='A' description='New customer' onClick={null} />
                </section>
                <section className='h-full overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-gray-50'>
                    <table className='min-w-full text-left '>
                        <thead className='w-full sticky top-0 bg-white border-collapse border-b'>
                            <tr>
                                {tableHeaders.map((item, id) => (
                                    <th className='py-4' key={id}>{item}</th>
                                ))}
                                <th className='w-20 py-4'></th>
                            </tr>
                        </thead>
                        <tbody className='overflow-auto '>
                            {seed.map((item) => (
                                <TableRow item={item} openModal={switchModal} />
                            ))}
                        </tbody>
                    </table>
                </section>
            </div>
            {showModal && createPortal(
                <TableModal
                    content={modalContent}
                    closeModal={switchModal}
                />,
                document.body
            )}
        </>
    )
}