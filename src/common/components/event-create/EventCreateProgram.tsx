import { useState } from 'react';
import DefaultItemForm from '@/common/components/default-item-form/DefaultItemForm';
import { EventCreateSection, EventCreateSectionTitle, } from '@/common/components/event-create/styles';
import { ISheduleStages } from '@/common/types';

interface EventCreateProgram {
    setStages: (arg: ISheduleStages) => void
}

export default function EventCreateProgram({setStages}: EventCreateProgram) {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [time, setTime] = useState('');

    const handleClick = () => {
        setStages({title, time});
    }

    return (
        <EventCreateSection>
            <EventCreateSectionTitle>Распишите программу</EventCreateSectionTitle>
            <DefaultItemForm
                typeInput="input"
                type='text'
                inputState={title}
                setInput={setTitle}
                labelText='Название этапа'
                placeholder='Название этапа...'
            />
            <DefaultItemForm
                typeInput="input"
                type='text'
                inputState={desc}
                setInput={setDesc}
                labelText='Опишите этап'
                placeholder='Описание этапа...'
            />
            <DefaultItemForm
                typeInput="input"
                type='time'
                inputState={time}
                setInput={setTime}
                labelText='Укажите время начала этапа'
                placeholder='Описание этапа...'
                inputWidth='30%'
            />
            <button onClick={handleClick}>Добавить</button>
        </EventCreateSection>
    )
}
