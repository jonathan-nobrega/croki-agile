export default function FormFields(
    { fields, payload }: { fields: FormField[], payload?: any }
) {
    return (
        <>
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
        </>
    )
}