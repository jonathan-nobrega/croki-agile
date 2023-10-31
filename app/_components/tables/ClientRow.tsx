import { useDispatch } from 'react-redux'
import RowStatus from '../utils/RowStatus'

export default function ClientRow({ data }: {data: ClientInterface}) {
    const { _id, name, company, email, phone, isActive } = data
    const dispatch = useDispatch()

    function handleButton() {
        dispatch(openModal({
            payload: { ...data }
        }))
    }
    return (
        <tr key={_id} className='w-full hover:bg-gray-50 cursor-pointer'>
            <td className='py-4 border-b border-gray-100'>{name}</td>
            <td className='py-4 border-b border-gray-100'>{company}</td>
            <td className='py-4 border-b border-gray-100'>{email}</td>
            <td className='py-4 border-b border-gray-100'>{phone}</td>
            <td className='flex py-3 border-b border-gray-100'>
                <RowStatus active={isActive} />
            </td>
            <td className='font-bold text-center text-green-500 hover:text-green-700'>
                <button onClick={() => switchModal('update')}>
                    Edit
                </button>
            </td>
        </tr>
    )
}