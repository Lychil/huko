import { DefaultFormItem, DefaultInput, DefaultLabel, DefaultTextarea } from "@/common/styles/styles";

interface DefaultItemFormProps {
    labelText: string,
    placeholder?: string,
    typeInput: "input" | "textarea",
    type?: "time" | "text",
    inputState: string,
    setInput: (arg: string) => void,
    inputWidth?: string,
    inputHeight?: string,
}

export default function DefaultItemForm(props: DefaultItemFormProps) {
    const { setInput } = props;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
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

                    placeholder={props.placeholder}
                />
            }
        </DefaultFormItem>
    )
}
