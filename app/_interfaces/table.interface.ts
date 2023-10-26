type RowInterface = ClientInterface | ProjectInterface

type SwitchModal = (payload?: any) => void

type TableForm = 'clientForm' | 'projectForm'

interface TableData {
    type: string
    list: RowInterface[]
}

interface props {
    headers: string[]
    title: string
    description: string
    actionButton: string
    data: TableData
}