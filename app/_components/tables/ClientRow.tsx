import { useDispatch } from 'react-redux'
import RowStatus from '../utils/RowStatus'
import { openModal } from '@/app/_store/reducers/ModalReducer'

export default function ClientRow({ data }: {data: ClientInterface}) {
    const { _id, name, company, email, phone, isActive } = data
    const dispatch = useDispatch()

    function handleButton(payload: any) {
        dispatch(openModal(payload))
    }
    return (
        <tr key={_id} className='w-full hover:bg-gray-50 cursor-pointer transition duration-100 ease-in-out'>
            <td className='py-4 border-b border-gray-100'>{name}</td>
            <td className='py-4 border-b border-gray-100'>{company}</td>
            <td className='py-4 border-b border-gray-100'>{email}</td>
            <td className='py-4 border-b border-gray-100'>{phone}</td>
            <td className='flex py-3 border-b border-gray-100'>
                <RowStatus active={isActive} />
            </td>
            <td className='font-bold text-center text-green-500 hover:text-green-700'>
                <button onClick={() => handleButton(data)}>
                    Edit
                </button>
            </td>
        </tr>
    )
}