import { DefaultFormItem, DefaultInput, DefaultLabel, DefaultTextarea } from "@/common/styles/styles";
import { IChangeEventFields, KeysEventEnum } from "@/store/reducers/events/eventsApi";

interface DefaultItemFormProps {
    labelText: string,
    placeholder?: string,
    nameInput: KeysEventEnum
    typeInput: "input" | "textarea",
    type?: "time" | "text",
    inputState: string,
    setInput: (arg: IChangeEventFields) => void,
    inputWidth?: string,
    inputHeight?: string,
}

export default function DefaultItemForm(props: DefaultItemFormProps) {
    const { setInput, nameInput } = props;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setInput({key: nameInput, value: e.target.value});
    }

    return (
        <DefaultFormItem>
            <DefaultLabel>{props.labelText}</DefaultLabel>
            {props.typeInput === "input" ?
                <DefaultInput
                    type={props.type}
                    value={props.inputState}
                    onChange={handleChange}
                    width={props.inputWidth}
                    placeholder={props.placeholder}
                />
                :
                <DefaultTextarea
                    width={props.inputWidth}
                    height={props.inputHeight}
                    value={props.inputState}
                    onChange={handleChange}
                    placeholder={props.placeholder}
                />
            }
        </DefaultFormItem>
    )
}
