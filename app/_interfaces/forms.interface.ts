interface FormInterface {
    header: string
    fields: FormField[]
    payload?: any
    buttonDescription: string
    buttonAction: () => void
}

interface FormField {
    id: number
    description: string
    value: string,
    type: 'text' | 'email'
    size: number
}