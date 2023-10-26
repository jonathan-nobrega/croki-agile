interface buttonProps {
    buttonType: "A" | "B" | "C"
    description: string
    action?: (props?: any) => void
}

export default function Button(buttonProps: buttonProps) {
    const { buttonType, description, action } = buttonProps
    let style = ""

    switch (buttonType) {
        case "A":
            style = 'bg-green-500 text-white hover:bg-green-600'
            break;
        case "B":
            style = 'bg-white text-green-600 border border-2 border-green-500 hover:bg-green-100'
            break;
        default:
            style = 'bg-green-500 text-white hover:bg-green-600'
            break;
    }
    return (
        <button
            onClick={action}
            className={`${style} w-28 min-w-max p-2 font-semibold rounded-md transition duration-300 ease-in-out`}
        >
            {description.charAt(0).toUpperCase() + description.slice(1)}
        </button>
    )
}