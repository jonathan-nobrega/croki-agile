import { useSelector } from "react-redux"

export default function TableForm({ form }: { form: FormInterface }) {

    const { header, type, fields } = useSelector((state: any) => state[form])

    return (
        <>
            <h1 className="m-5 text-xl text-gray-700 font-semibold">
                {header}
            </h1>
            <section className="m-5 bg-white grid grid-cols-2 gap-3">
                {fields.map((item: any) => (
                    <div key={item.id} className={`col-span-${item.size}`}>
                        <label htmlFor={item.description} className="block py-1 font-semibold text-sm w-full">
                            {item.description.charAt(0).toUpperCase() + item.description.slice(1)}
                        </label>
                        <input
                            type={item.type}
                            id={item.description}
                            placeholder={item.value ? item.value : null}
                            className="border p-2 rounded-md w-full"
                        />
                    </div>
                ))}
            </section>
        </>
    )
}