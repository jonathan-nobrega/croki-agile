export default function PaymentStatus({ status }: { status: string }) {

    switch (status) {
        case 'Pending':
            return (
                <div className='p-1 w-16 text-xs text-center text-red-600 font-semibold border border-red-300 bg-red-50 rounded-md'>
                    Pending
                </div>
            )
        case 'Paid':
            return (
                <div className='p-1 w-16 text-xs text-center text-green-600 font-semibold border border-green-300 bg-green-50 rounded-md'>
                    Paid
                </div>
            )
        case 'Draft':
            return (
                <div className='p-1 w-16 text-xs text-center text-orange-600 font-semibold border border-orange-300 bg-orange-50 rounded-md'>
                    Draft
                </div>
            )
        default:
            return (
                <div className='p-1 w-16 text-xs text-center text-gray-600 font-semibold border border-gray-300 bg-gray-50 rounded-md'>
                    Void
                </div>
            )
    }
}