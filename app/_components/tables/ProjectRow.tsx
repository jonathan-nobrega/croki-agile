import { useDispatch } from "react-redux"

import { openModal } from "@/app/_store/reducers/ModalReducer"
import ActiveStatus from "../utils/ActiveStatus"

export default function ProjectRow({ data }: { data: ProjectInterface }) {
    const { _id, title, client, billing_method, isActive } = data
    const dispatch = useDispatch()

    function handleButton(payload: any) {
        dispatch(openModal(payload))
    }
    return (
        <tr key={_id} className='w-full hover:bg-gray-50 cursor-pointer'>
            <td className='py-4 border-b border-gray-100'>{title}</td>
            <td className='py-4 border-b border-gray-100'>{client}</td>
            <td className='py-4 border-b border-gray-100'>{billing_method}</td>
            <td className='flex py-3 border-b border-gray-100'>
                <ActiveStatus active={isActive} />
            </td>
            <td className='font-bold text-center text-green-500 hover:text-green-700'>
                <button onClick={() => handleButton(data)}>
                    Edit
                </button>
            </td>
        </tr>
    )
}