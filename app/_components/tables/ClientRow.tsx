import { createPortal } from 'react-dom'
import TableModal from './TableModal'
import { useState } from 'react'

export default function ClientRow({ data }: { data: ClientInterface }) {
    const [showModal, setShowModal] = useState(false)

    function switchModal(data: any) {
        setShowModal(!showModal)
    }

    return (
        <>
            <tr key={data?._id} className='w-full hover:bg-gray-50 cursor-pointer'>
                <td className='py-4 border-b border-gray-100'>{data?.name}</td>
                <td className='py-4 border-b border-gray-100'>{data?.company}</td>
                <td className='py-4 border-b border-gray-100'>{data?.email}</td>
                <td className='py-4 border-b border-gray-100'>{data?.phone}</td>
                <td className='flex py-3 border-b border-gray-100'>
                    {data?.isActive ? (
                        <div className='p-1 w-16 text-xs text-center text-green-600 font-semibold border border-green-300 bg-green-50 rounded-md'>
                            Active
                        </div>
                    ) : (
                        <div className='p-1 w-16 text-xs text-center text-red-600 font-semibold border border-red-300 bg-red-50 rounded-md'>
                            Inactive
                        </div>
                    )}
                </td>
                <td className='font-bold text-center text-green-500 hover:text-green-700'>
                    <button onClick={() => switchModal(data)}>
                        Edit
                    </button>
                </td>
            </tr>
            {showModal && createPortal(
                <TableModal
                    data={data}
                    type={'clients'}
                    closeModal={switchModal}
                />,
                document.body
            )}
        </>
    )
}