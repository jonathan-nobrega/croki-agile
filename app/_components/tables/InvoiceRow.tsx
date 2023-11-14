import { useDispatch } from "react-redux"

import { openModal } from "@/app/_store/reducers/ModalReducer"
import PaymentStatus from "../utils/PaymentStatus"
import { MapPinIcon } from "@heroicons/react/24/outline"

export default function ProjectRow({ data }: { data: InvoiceInterface }) {
    const {
        _id,
        invoice_number,
        description,
        bill_to,
        address,
        billing_address,
        amount,
        due_date,
        status,
        items,
    } = data

    const dispatch = useDispatch()

    function handleButton(payload: any) {
        dispatch(openModal(payload))
    }
    return (
        <tr key={_id} className='w-full border-b border-gray-100 hover:bg-gray-50 cursor-pointer'>
            <td className='py-4 '>INV-#{invoice_number.toString().padStart(3, '0')}</td>
            <td className='py-4 '><strong>{description.substring(0, 40)}</strong></td>
            <td className='py-4 h-full border-gray-100'>
                <p>{bill_to}</p>
                <p className="my-auto text-xs text-gray-400">{address.full_address}</p>
            </td>
            <td className='py-4 '><strong>$ {amount}</strong></td>
            <td className='py-4 '>{due_date}</td>
            <td className=''>
                <PaymentStatus status={status} />
            </td>
            <td className='font-bold text-center text-green-500 hover:text-green-700'>
                <button onClick={() => handleButton(data)}>
                    Edit
                </button>
            </td>
        </tr>
    )
}