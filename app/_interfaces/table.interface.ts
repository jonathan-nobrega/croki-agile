interface props {
    headers: string[]
    title: string
    description: string
    actionButton: string
    data: TableData
}

type RowInterface = ClientInterface | ProjectInterface

interface TableData {
    type: string
    list: RowInterface[]
}

type SwitchModal = (payload?: any) => void