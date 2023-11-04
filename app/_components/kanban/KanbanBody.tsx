import { useState } from "react"
import projectsSeed from "../../_seed/projects.seed.json"
import KanbanColumn from "./KanbanColumn"
import { ArrowPathIcon, CheckIcon, ClockIcon, EllipsisHorizontalCircleIcon } from "@heroicons/react/24/outline"
import { useSelector } from "react-redux"

const columnTitles = [
    { _id: 1, title: 'Pending', icon: ClockIcon },
    { _id: 2, title: 'In Progress', icon: EllipsisHorizontalCircleIcon },
    { _id: 3, title: 'Review', icon: ArrowPathIcon },
    { _id: 4, title: 'Done', icon: CheckIcon },
]

export default function KanbanBody() {

    const [cards, setCards] = useState(projectsSeed)
    const { draggingCard } = useSelector((state: any) => state.kanbanSlice)

    function onDrop(column: any, index: number) {
        // write on drop card utility function
        // that reorganizes the cards
    }

    return (
        <div className="h-full grid grid-cols-4 gap-4 overflow-auto">
            {columnTitles.map((column) => (
                <KanbanColumn
                    title={column.title}
                    icon={column.icon}
                    id={column._id}
                    data={projectsSeed}
                    onDrop={onDrop}
                />
            ))}
        </div>
    )
}