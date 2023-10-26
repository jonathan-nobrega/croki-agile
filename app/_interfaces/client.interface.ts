interface inputField {
    id: number
    description: string
    value: string
    type: 'text' | 'email' | 'number'
    size: number
}

interface ClientInterface {
    _id: string
    isActive: boolean
    name: string
    company: string
    email: string
    phone: string
    address: string
}
