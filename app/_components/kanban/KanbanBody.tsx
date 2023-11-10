import { Fragment, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ArrowPathIcon, CheckIcon, ClockIcon, EllipsisHorizontalCircleIcon } from "@heroicons/react/24/outline"

import projectsSeed from "../../_seed/projects.seed.json"
import KanbanColumn from "./KanbanColumn"
import { setCards } from "@/app/_store/reducers/KanbanReducer"

const columns = [
    { _id: 1, title: 'Pending', icon: ClockIcon },
    { _id: 2, title: 'In Progress', icon: EllipsisHorizontalCircleIcon },
    { _id: 3, title: 'Review', icon: ArrowPathIcon },
    { _id: 4, title: 'Done', icon: CheckIcon },
]

export default function KanbanBody() {

    const dispatch = useDispatch()

    useEffect(() => {
        console.log('fez o fetch')
        dispatch(setCards(projectsSeed))
    }, [])

    return (
        <div className="h-full grid grid-cols-4 gap-4 overflow-auto">
            {columns.map((column) => (
                <Fragment key={column._id}>
                    <KanbanColumn
                        title={column.title}
                        icon={
                            <column.icon
                                className='w-6 h-auto text-gray-400'
                            />
                        }
                    />
                </Fragment>
            ))}
        </div>
    )
}