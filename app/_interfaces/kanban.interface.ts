type DropAreaProps = {
    onDrop: () => void
}

type ColumnProps = {
    title: string
    id: number
    icon: any
    data: any[]
    onDrop: (column: any, index: number) => void
}