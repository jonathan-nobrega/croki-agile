import { useDispatch, useSelector } from "react-redux"
import Button from "../utils/Button"
import FormFields from "./FormFields"
import modalEscapeHandlers from "@/app/_hooks/modalEscapeHandlers"
import { closeModal } from "@/app/_store/reducers/ModalReducer"

export default function FormLayout(props: FormInterface) {

    const {header, fields, buttonDescription = 'something', buttonAction } = props
    const dispatch = useDispatch()

    function cancelForm() {
        return dispatch(closeModal())
    }

    return (
        <>
            <h1 className="m-5 text-xl text-gray-700 font-semibold">
                {header}
            </h1>
            <section className="m-5 bg-white grid grid-cols-2 gap-3">
                <FormFields fields={fields} />
            </section>
            <section className="m-5 space-x-5">
                <Button
                    description={buttonDescription}
                    action={buttonAction}
                    type="A"
                />
                <Button
                    description="Cancel"
                    action={cancelForm}
                    type="B"
                />
            </section>
        </>
    )
}