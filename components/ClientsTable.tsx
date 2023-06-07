import seed from '../seed.json'
import Button from './Button'

const tableHeaders = ['Name', 'Company', 'Email', 'Phone', 'Status']

export default function ClientsTable() {
    const props = {
        title: 'Clients',
        description: 'List of all customer entities including child and parent accounts.',
        actionButton: 'Add customer'
    }

    const openModal = (item: any) => {
        console.log('clicked! ', item)
    }

    return (
        <div className='flex flex-col h-full w-full p-5 space-y-3 border rounded-lg shadow-md'>
            <section className='flex mb-5 justify-between items-center bg-white'>
                <div>
                    <h1 className='text-xl text-gray-700 font-semibold'>{props.title}</h1>
                    <p className='mt-2'>{props.description}</p>
                </div>
                <Button type='A' description='New customer' />
            </section>
            <section className='h-full overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-gray-50'>
                <table className='min-w-full text-left '>
                    <thead className='w-full sticky top-0 bg-white border-collapse border-b'>
                        <tr>
                            {tableHeaders.map((item, id) => (
                                <th
                                    className='py-4'
                                    key={id}
                                >
                                    {item}
                                </th>
                            ))}
                            <th className='w-20 py-4'></th>
                        </tr>
                    </thead>
                    <tbody className='overflow-auto '>
                        {seed.map((item) => (
                            <tr
                                key={item._id}
                                className='w-full hover:bg-gray-50 cursor-pointer'
                                onClick={openModal(item)}
                            >
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
                                    <button>Edit</button>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    )
}