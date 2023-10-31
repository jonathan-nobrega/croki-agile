import { useSelector } from "react-redux";
import FormLayout from "./FormLayout";

export default function ClientForm() {

    const { payload } = useSelector((state: any) => state.modalSlice)

    function action() {
        // call api
    }

    return (
        <FormLayout
            header='Clients'
            fields={[
                { id: 1, description: 'name', value: payload?.name, type: 'text', size: 1 },
                { id: 2, description: 'company', value: payload?.company, type: 'text', size: 1 },
                { id: 3, description: 'email', value: payload?.email, type: 'email', size: 1 },
                { id: 4, description: 'phone', value: payload?.phone, type: 'text', size: 1 },
                { id: 5, description: 'address', value: payload?.address, type: 'text', size: 2 },
            ]}
            buttonDescription={payload ? 'Update' : 'Create'}
            buttonAction={action}
        />
    )
}