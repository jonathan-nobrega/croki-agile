import FormLayout from "../FormLayout";

export default function CreateClient() {

    function action() {
        // call api
    }

    return (
        <FormLayout
            header='Clients'
            fields={[
                { id: 1, description: 'name', value: '', type: 'text', size: 1 },
                { id: 2, description: 'company', value: '', type: 'text', size: 1 },
                { id: 3, description: 'email', value: '', type: 'email', size: 1 },
                { id: 4, description: 'phone', value: '', type: 'text', size: 1 },
                { id: 5, description: 'address', value: '', type: 'text', size: 2 },
            ]}
            buttonDescription='Add Client'
            buttonAction={action}
        />
    )
}