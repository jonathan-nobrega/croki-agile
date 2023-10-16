import Button from "../utils/Button";

export default function ClientForm(data: any) {

    const { name, company, email, phone, address } = data
    console.log(data)

    const fields: inputField[] = [
        { description: 'name', value: name, type: 'text', size: 1 },
        { description: 'company', value: company, type: 'text', size: 1 },
        { description: 'email', value: email, type: 'email', size: 1 },
        { description: 'phone', value: phone, type: 'text', size: 1 },
        { description: 'address', value: address, type: 'text', size: 2 },
    ]

    return (
        <>
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
                            placeholder={data[item.description]}
                            className="border p-2 rounded-md w-full"
                        />
                    </div>
                ))}
            </div>
        </>
    )
}