export default function HeadersList({ tableHeaders }: { tableHeaders: string[] }) {
    return (
        <thead className='w-full sticky top-0 bg-white border-collapse border-b'>
            <tr>
                {tableHeaders.map((item: any, id: any) => (
                    <th className='py-4' key={id}>
                        {item}
                    </th>
                ))}
                <th className='w-20 py-4'></th>
            </tr>
        </thead>
    )
}