
export default function TableRow(
    { item, openModal }: { item: item, openModal: openModal }
) {
    return (
        <tr key={item._id} className='w-full hover:bg-gray-50 cursor-pointer'>
            <td className='py-4 border-b border-gray-100'>{item.name}</td>
            <td className='py-4 border-b border-gray-100'>{item.company}</td>
            <td className='py-4 border-b border-gray-100'>{item.email}</td>
            <td className='py-4 border-b border-gray-100'>{item.phone}</td>
            <td className='flex py-3 border-b border-gray-100'>
                {item.isActive ? (
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
                <button onClick={() => openModal(item)}>
                    Edit
                </button>
            </td>
        </tr>
    )
}

type item = {
    _id: string
    name: string
    company: string
    email: string
    phone: string
    isActive: boolean
}

type openModal = (item: item | any) => void