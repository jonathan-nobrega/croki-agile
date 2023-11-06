interface KanbanState {
    currentCards: ProjectInterface[] | []
    draggingCard: string
    hoveredColumn: string
}

type ColumnProps = {
    title: string
    icon: any
    id?: number
}