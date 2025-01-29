import classNames from "classnames";

interface ButtonProps {
    type?: "A" | "B" | "C" | String
    description?: string
    action?: any
    customStyle?: string
    size?: "small" | "medium" | "full"
}

export default function Button(
    { type = "A",
        description = "click me",
        action = "",
        customStyle = "",
        size = "small"
    }: ButtonProps
) {
    // const { type, customStyle, description, action } = buttonProps

    let baseStyle;
    if (type == "A") baseStyle = 'bg-green-500 text-white hover:bg-green-600'
    if (type == "B") baseStyle = 'bg-white text-green-600 border border-2 border-green-500 hover:bg-green-100'
    if (type == "C") baseStyle = 'bg-gray-100 text-gray-600 hover:bg-gray-200'

    let buttonSize;
    if (size == "small") buttonSize = "w-28"
    if (size == "full") buttonSize = "w-full"

    return (
        <button
            onClick={action}
            className={classNames(
                baseStyle, buttonSize,
                "min-w-max p-2 font-semibold rounded-md transition duration-100 ease-in-out",
                customStyle
            )}
        >
            {description.charAt(0).toUpperCase() + description.slice(1)}
        </button>
    )
}