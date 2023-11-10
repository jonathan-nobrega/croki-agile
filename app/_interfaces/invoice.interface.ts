interface InvoiceInterface {
    _id: string
    invoice_number: number
    description: string
    bill_to: string
    address: Address
    billing_address: number
    amount: number
    due_date: string
    status: string
    items: Item[];
}

interface Address {
    street: string
    city: string
    full_address: string
}

interface Item {
    item_name: string
    quantity: number
    price: number
}