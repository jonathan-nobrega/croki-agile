type Module = 'clients' | 'projects' | 'backlog' | 'kanban' | 'settings'

interface ModuleTable {
    title: string
    description: string
    actionButton: string
    headers: string[]
    data?: any
}