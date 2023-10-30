export default function BodyList({ tableRow, data }: { tableRow: any, data: any }) {
    return (
        <tbody className='overflow-auto '>
            {data.map((item: any) => tableRow(item))}
        </tbody>
    )
}