import { useSelector } from "react-redux";
import FormLayout from "./FormLayout";

export default function ProjectForm() {
    
    const { payload } = useSelector((state: any) => state.modalSlice)

    function action() {
        // call api
    }

    return (
        <FormLayout
            header='Projects'
            fields={[
                { id: 1, description: 'title', value: payload?.title, type: 'text', size: 1 },
                { id: 2, description: 'client', value: payload?.client , type: 'text', size: 1 },
                { id: 3, description: 'billing method', value: payload?.billing_method, type: 'email', size: 1 },
            ]}
            buttonDescription={payload ? 'Update' : 'Create'}
            buttonAction={action}
        />
    )
}