import { useSelector } from "react-redux"
import ClientRow from "./ClientRow"
import { useEffect, useState } from "react"
import LoadingSpinner from "../utils/LoadingSpinner"

export default function TableBody() {
    const { title, tableHeaders, tableData } = useSelector((state: any) => state.moduleSlice)
    const [data, setData] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setData(tableData)
        }, 1000)
    }, [data])

    function selectRow(module: string, payload: any) {
        console.log(module, payload)
        if (module == 'clients') return (<ClientRow data={payload} />)
    }

    return (
        <section className='h-full overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-gray-50'>
            {data.length > 0
                ?
                <table className='min-w-full text-left '>
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
                    <tbody className='overflow-auto '>
                        {data.map((element: any) => selectRow(title, element))}
                    </tbody>
                </table>
                :
                <LoadingSpinner />
            }
        </section>
    )
}