interface FormInterface {
    header: string
    type: string | 'create' | 'update'
    fields: {
        id: number
        description: string
        value: string,
        type: 'text' | 'email'
        size: number
    }[]
}