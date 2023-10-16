"use client"

import { createPortal } from 'react-dom'
import Button from '../utils/Button'
import TableModal from './TableModal'
import { useState } from 'react'
import ClientRow from './ClientRow'
import ProjectRow from './ProjectRow'


export default function page({ props }: { props: props }) {
    const [showModal, setShowModal] = useState(false)
    const [modalContent, setModalContent] = useState({})

    const { title, description, actionButton, headers, data } = props

    function switchModal(payload: any) {
        if (payload) setModalContent(payload)
        setShowModal(!showModal)
    }

    function rowType(item: any) {
        switch (data.type) {
            case "clients":
                return <ClientRow data={item} openModal={switchModal} />
            case "projects":
                return <ProjectRow data={item} openModal={switchModal} />
        }
    }

    return (
        <>
            <div className='flex flex-col h-full w-full p-5 space-y-3 border rounded-lg shadow-md'>
                <section className='flex mb-5 justify-between items-center bg-white'>
                    <div>
                        <h1 className='text-xl text-gray-700 font-semibold'>{title}</h1>
                        <p className='mt-2'>{description}</p>
                    </div>
                    <Button type='A' description={actionButton} onClick={null} />
                </section>
                <section className='h-full overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-gray-50'>
                    <table className='min-w-full text-left '>
                        <thead className='w-full sticky top-0 bg-white border-collapse border-b'>
                            <tr>
                                {headers.map((item, id) => (
                                    <th className='py-4' key={id}>{item}</th>
                                ))}
                                <th className='w-20 py-4'></th>
                            </tr>
                        </thead>
                        <tbody className='overflow-auto '>
                            {data.list.map((item: RowInterface) => rowType(item))}
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