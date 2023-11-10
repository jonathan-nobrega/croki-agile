import classNames from "classnames";

export default function Button(buttonProps: buttonProps) {
    const { type, customStyle, description, action } = buttonProps

    let baseStyle;
    if (type == "A") baseStyle = 'bg-green-500 text-white hover:bg-green-600'
    if (type == "B") baseStyle = 'bg-white text-green-600 border border-2 border-green-500 hover:bg-green-100'
    if (type == "C") baseStyle = 'bg-gray-100 text-gray-600 hover:bg-gray-200'

    return (
        <button
            onClick={action}
            className={classNames(
                baseStyle,
                "w-28 min-w-max p-2 font-semibold rounded-md transition duration-100 ease-in-out",
                customStyle
            )}
        >
            {description.charAt(0).toUpperCase() + description.slice(1)}
        </button>
    )
}