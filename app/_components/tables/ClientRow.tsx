import RowStatus from '../utils/RowStatus'

export default function ClientRow(data: ClientInterface) {
    return (
        <tr key={data?._id} className='w-full hover:bg-gray-50 cursor-pointer'>
            <td className='py-4 border-b border-gray-100'>{data?.name}</td>
            <td className='py-4 border-b border-gray-100'>{data?.company}</td>
            <td className='py-4 border-b border-gray-100'>{data?.email}</td>
            <td className='py-4 border-b border-gray-100'>{data?.phone}</td>
            <td className='flex py-3 border-b border-gray-100'>
                <RowStatus active={data?.isActive} />
            </td>
            <td className='font-bold text-center text-green-500 hover:text-green-700'>
                <button onClick={() => switchModal('update')}>
                    Edit
                </button>
            </td>
        </tr>
    )
}