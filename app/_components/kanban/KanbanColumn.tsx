import { Fragment, ReactComponentElement, ReactElement } from "react"

import KanbanCard from "./KanbanCard"
import ColumnDropArea from "./ColumnDropArea"

export default function KanbanColumn({ icon, id, title, data, onDrop }: ColumnProps) {

    const columnCards: ProjectInterface[] = data.filter((element) => element.status === title)

    return (
        <div key={id} className="rounded-lg bg-gray-100 p-3">
            <div className="flex">
                {/* <icon.icon className="w-6 h-6" /> */}
                <h2 className="mb-3 text-lg text-gray-700">
                    {title}
                </h2>
            </div>
            <ColumnDropArea onDrop={() => onDrop(id, 0)} />
            <div className="flex flex-col">
                {columnCards.map((card, index) => (
                    <Fragment key={card._id}>
                        <KanbanCard {...card} />
                        <ColumnDropArea onDrop={() => onDrop(id, index + 1)} />
                    </Fragment>
                )
                )}
            </div>

        </div>
    )
}