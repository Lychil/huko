import { KeysEventEnum } from "@/store/reducers/events/eventsApi";

interface IInput {
    id: KeysEventEnum,
    type: "text" | "date" | "time",
    placeholder?: string,
    width?: string
}

interface IInputsList {
    [arg: string]: IInput 
}

export const inputs: IInputsList = {};
inputs["title"] = {
    id: KeysEventEnum.TITLE,
    type: "text",
    placeholder: "Введите название мероприятия...",
}

inputs["description"] = {
    id: KeysEventEnum.DESCRIPTION,
    type: "text",
    placeholder: "Введите описание мероприятия...",
}

inputs["location"] = {
    id: KeysEventEnum.LOCATION,
    type: "text",
    placeholder: "Введите место проведения...",
}

inputs["start"] = {
    id: KeysEventEnum.START,
    type: "time",
    width: "40%",
}

inputs["finish"] = {
    id: KeysEventEnum.FINISH,
    type: "time",
    width: "40%",
}