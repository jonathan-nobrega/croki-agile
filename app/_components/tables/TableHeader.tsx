import { openModal } from "@/app/_store/reducers/ModalReducer"
import { useDispatch, useSelector } from "react-redux"
import Button from "../utils/Button"

export default function TableHeaders() {

    const {
        title,
        description,
        buttonDescription,
    } = useSelector((state: any) => state.moduleSlice)

    const dispatch = useDispatch()

    function handleButton() {
        dispatch(openModal())
    }

    return (
        <section className='flex mb-5 justify-between items-center bg-white'>
            <div>
                <h1 className='text-xl text-gray-700 font-semibold'>
                    {title.charAt(0).toUpperCase() + title.slice(1)}
                </h1>
                <p className='mt-2'>
                    {description}
                </p>
            </div>
            <Button
                type='A'
                description={buttonDescription}
                action={handleButton}
            />
        </section>
    )
}