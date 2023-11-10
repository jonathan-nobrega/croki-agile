import { Fragment, ReactComponentElement, ReactElement } from "react"

import KanbanCard from "./KanbanCard"
import ColumnDropArea from "./ColumnDropArea"
import { useSelector } from "react-redux"

export default function KanbanColumn({ icon, title }: ColumnProps) {

    const { currentCards } = useSelector((state: any) => state.kanbanSlice)

    const columnCards: ProjectInterface[] =
        currentCards
            .filter((element: ProjectInterface) => element.status === title)
    // .sort()

    return (
        <div className="rounded-lg bg-gray-100 p-3">
            <div className="flex m-2 align-middle">
                <h2 className="mr-3 text-lg text-gray-700">
                    {title}
                </h2>
                {icon}
            </div>
            <ColumnDropArea
                columnTitle={title}
            />
            <div className="flex flex-col">
                {columnCards.map((card: ProjectInterface) => (
                    <Fragment key={card._id}>
                        <KanbanCard {...card} />
                        <ColumnDropArea
                            columnTitle={title}
                        />
                    </Fragment>
                )
                )}
            </div>
        </div>
    )
}