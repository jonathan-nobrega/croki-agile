export default function RowStatus({ active }: { active: boolean }) {
    return (
        <>
            {active ? (
                <div className='p-1 w-16 text-xs text-center text-green-600 font-semibold border border-green-300 bg-green-50 rounded-md' >
                    Active
                </div>) : (
                <div className='p-1 w-16 text-xs text-center text-red-600 font-semibold border border-red-300 bg-red-50 rounded-md'>
                    Inactive
                </div>)}
        </>
    )
}