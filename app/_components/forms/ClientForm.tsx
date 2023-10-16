import Button from "../utils/Button";

export default function ClientForm(content: content) {

    const { name, company, email, phone, address } = content

    const fields: inputField[] = [
        { description: 'name', value: name, type: 'text', size: 1 },
        { description: 'company', value: company, type: 'text', size: 1 },
        { description: 'email', value: email, type: 'email', size: 1 },
        { description: 'phone', value: phone, type: 'text', size: 1 },
        { description: 'address', value: address, type: 'text', size: 2 },
    ]

    return (
        <div id='modal-client-form' className="h-full w-full">
            <section className="m-5 bg-white">
                <h1 className="mb-5 text-xl text-gray-700 font-semibold">Client details</h1>
                <div className="grid grid-cols-2 gap-3">
                    {fields.map((item) => (
                        <div className={`col-span-${item.size}`}>
                            <label htmlFor={item.description} className="block py-1 font-semibold text-sm w-full">
                                {item.description.charAt(0).toUpperCase() + item.description.slice(1)}
                            </label>
                            <input
                                type={item.type}
                                id={item.description}
                                placeholder={item.value}
                                className="border p-2 rounded-md w-full"
                            />
                        </div>
                    ))}
                </div>
            </section>
            <section className="m-5 space-x-5">
                <Button description="Update" type="A" />
                <Button description="Cancel" type="B" action={closeModal} />
            </section>
        </div>
    )
}