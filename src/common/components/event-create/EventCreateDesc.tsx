import DefaultItemForm from '@/common/components/default-item-form/DefaultItemForm';
import { EventCreateSection, EventCreateSectionTitle } from '@/common/components/event-create/styles';
import { useAppSelector } from '@/common/hooks/useAppSelector';
import { useActions } from '@/store/actions';
import { IChangeEventFields, KeysEventEnum } from '@/store/reducers/events/eventsApi';

export default function EventCreateDesc() {
    const { title, description, location, start, finish } = useAppSelector(state => state.newEventReducer);
    const { setField } = useActions();

    const handleField = (arg: IChangeEventFields) => {
        setField({key: arg.key, value: arg.value});
    }

    return (
        <EventCreateSection>
            <EventCreateSectionTitle>Введите информацию о мероприятии</EventCreateSectionTitle>
            <DefaultItemForm
                typeInput="input"
                type="text"
                nameInput={KeysEventEnum.TITLE}
                inputState={title}
                setInput={handleField}
                labelText='Название мероприятия'
                placeholder='Введите название мероприятия...'
                inputWidth='100%'
            />
            <DefaultItemForm
                typeInput="textarea"
                nameInput={KeysEventEnum.DESCRIPTION}
                inputState={description}
                setInput={handleField}
                labelText='Описание мероприятия'
                placeholder='Введите описание мероприятия...'
                inputWidth='100%'
                inputHeight='300px'
            />
            <DefaultItemForm
                typeInput="input"
                type="text"
                nameInput={KeysEventEnum.LOCATION}
                inputState={location}
                setInput={handleField}
                labelText='Место проведения'
                placeholder='Введите место проведения...'
                inputWidth='100%'
            />
            <DefaultItemForm
                typeInput="input"
                type='time'
                nameInput={KeysEventEnum.START}
                inputState={start}
                setInput={handleField}
                labelText='Укажите время начала мероприятия'
                placeholder='Описание этапа...'
                inputWidth='30%'
            />
            <DefaultItemForm
                typeInput="input"
                type='time'
                nameInput={KeysEventEnum.FINISH}
                inputState={finish}
                setInput={handleField}
                labelText='Укажите время конца мероприятия'
                placeholder='Описание этапа...'
                inputWidth='30%'
            />
        </EventCreateSection>
    )
}
