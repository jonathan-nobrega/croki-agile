import { useState } from "react"
import classnames from "classnames"

export default function ColumnDropArea({ onDrop }: DropAreaProps) {
    const [isVisible, setIsvisible] = useState(false)

    function showArea() {
        setIsvisible(true)
    }

    function hideArea() {
        setIsvisible(false)
    }

    return (
        <div
            className={classnames(
                "relative h-2 order-dashed bg-gray-200 rounded-lg transition-[padding,opacity] only:h-44",
                "before:absolute before:inset-2 before:rounded-md before:bg-gray-200 before:border-2 before:border-dashed before:border-gray-300",
                isVisible ? "py-10 my-2 opacity-100 " : "opacity-0"
            )}
            onDragEnter={showArea}
            onDragLeave={hideArea}
            onDrop={() => {
                onDrop()
                hideArea()
            }}
            onDragOver={event => event.preventDefault()}
        />
    )
}