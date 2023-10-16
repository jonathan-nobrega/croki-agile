type data = ClientInterface | ProjectInterface

type openModal = (data: data | any) => void

export default function TableRow(
    { data, openModal }: { data: RowData, openModal: openModal }
) {
    const { type, list } = data

    return {list.map(item => {
        
    })}

    // switch (type) {
    //     case "clients":
    //         return (
    //             <tr key={item._id} className='w-full hover:bg-gray-50 cursor-pointer'>
    //                 <td className='py-4 border-b border-gray-100'>{item.name}</td>
    //                 <td className='py-4 border-b border-gray-100'>{item.company}</td>
    //                 <td className='py-4 border-b border-gray-100'>{item.email}</td>
    //                 <td className='py-4 border-b border-gray-100'>{item.phone}</td>
    //                 <td className='flex py-3 border-b border-gray-100'>
    //                     {item.isActive ? (
    //                         <div className='p-1 w-16 text-xs text-center text-green-600 font-semibold border border-green-300 bg-green-50 rounded-md'>
    //                             Active
    //                         </div>
    //                     ) : (
    //                         <div className='p-1 w-16 text-xs text-center text-red-600 font-semibold border border-red-300 bg-red-50 rounded-md'>
    //                             Inactive
    //                         </div>
    //                     )}
    //                 </td>
    //                 <td className='font-bold text-center text-green-500 hover:text-green-700'>
    //                     <button onClick={() => openModal(data)}>
    //                         Edit
    //                     </button>
    //                 </td>
    //             </tr>
    //         )
    //         break;
    //     case "projects":
    //         return (
    //             <tr key={item._id} className='w-full hover:bg-gray-50 cursor-pointer'>
    //                 <td className='py-4 border-b border-gray-100'>{item.name}</td>
    //                 <td className='py-4 border-b border-gray-100'>{item.company}</td>
    //                 <td className='py-4 border-b border-gray-100'>{item.email}</td>
    //                 <td className='py-4 border-b border-gray-100'>{item.phone}</td>
    //                 <td className='flex py-3 border-b border-gray-100'>
    //                     {item.isActive ? (
    //                         <div className='p-1 w-16 text-xs text-center text-green-600 font-semibold border border-green-300 bg-green-50 rounded-md'>
    //                             Active
    //                         </div>
    //                     ) : (
    //                         <div className='p-1 w-16 text-xs text-center text-red-600 font-semibold border border-red-300 bg-red-50 rounded-md'>
    //                             Inactive
    //                         </div>
    //                     )}
    //                 </td>
    //                 <td className='font-bold text-center text-green-500 hover:text-green-700'>
    //                     <button onClick={() => openModal(data)}>
    //                         Edit
    //                     </button>
    //                 </td>
    //             </tr>
    //         )
    //     default:
    //         break;
    // }
}