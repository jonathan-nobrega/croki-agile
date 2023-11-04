import { useDispatch, useSelector } from "react-redux"
import { setDraggingCard } from "@/app/_store/reducers/KanbanReducer"

export default function KanbanCard(
    { _id, title, client, billing_method, isActive }: ProjectInterface
) {
    const dispatch = useDispatch()

    return (
        <div
            key={_id}
            draggable="true"
            onDragStart={() => dispatch(setDraggingCard(_id))}
            onDragEnd={() => dispatch(setDraggingCard(null))}
            className="
            p-3 space-y-5 bg-white outline-slate-100 outline-3 rounded-md shadow-md 
            cursor-grab active:animate-pulse
            "
        >
            <p className="text-xs p-1 w-12 inline-block rounded-md border-2 border-gray-200">{_id.substring(0, 5)}</p>
            <p className="text-sm">{title}</p>
            <p className="text-xs text-right">{client}</p>

        </div>
    )
}