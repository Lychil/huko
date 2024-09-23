import { useState } from 'react';
import DefaultItemForm from '@/common/components/default-item-form/DefaultItemForm';
import { EventCreateSection, EventCreateSectionTitle } from '@/common/components/event-create/styles';

export default function EventCreateDesc() {
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');

    return (
        <EventCreateSection>
            <EventCreateSectionTitle>Введите информацию о мероприятии</EventCreateSectionTitle>
            <DefaultItemForm
                typeInput="input"
                type="text"
                inputState={name}
                setInput={setName}
                labelText='Название мероприятия'
                placeholder='Введите название мероприятия...'
                inputWidth='100%'
            />
            <DefaultItemForm
                typeInput="textarea"
                inputState={desc}
                setInput={setDesc}
                labelText='Описание мероприятия'
                placeholder='Введите описание мероприятия...'
                inputWidth='100%'
                inputHeight='300px'
            />
        </EventCreateSection>
    )
}
