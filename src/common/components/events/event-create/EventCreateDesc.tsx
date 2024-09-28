import { EventCreateSection, EventCreateSectionTitle } from '@/common/components/events/event-create/styles';
import { useAppSelector } from '@/common/hooks/useAppSelector';
import { FormItem } from '@/common/styles/styles';
import { Input, Label } from '@/common/styles/ui/ui';
import { useActions } from '@/store/actions';
import { IChangeEventFields, KeysEventEnum } from '@/store/reducers/events/eventsApi';
import { inputs } from '@/common/components/events/event-create/data';

export default function EventCreateDesc() {
    const { title, description, location, start, finish } = useAppSelector(state => state.newEventReducer);
    const { setField } = useActions();

    const handleField = (arg: IChangeEventFields) => {
        setField({ key: arg.key, value: arg.value });
    }
    return (
        // ToDo
        <EventCreateSection>
            <EventCreateSectionTitle>Введите информацию о мероприятии</EventCreateSectionTitle>
            <FormItem>
                <Label htmlFor={KeysEventEnum.TITLE}>Название мероприятия</Label>
                <Input
                    value={title}
                    onChange={e => handleField({ value: e.target.value, key: KeysEventEnum.TITLE})}
                    {...inputs["title"]} />
            </FormItem>

            <FormItem>
                <Label htmlFor={KeysEventEnum.DESCRIPTION}>Описание</Label>
                <Input
                    value={description}
                    onChange={e => handleField({ value: e.target.value, key: KeysEventEnum.DESCRIPTION})}
                    {...inputs["description"]} />
            </FormItem>

            <FormItem>
                <Label htmlFor={KeysEventEnum.LOCATION}>Место проведения</Label>
                <Input
                    value={location}
                    onChange={e => handleField({ value: e.target.value, key: KeysEventEnum.LOCATION})}
                    {...inputs["location"]} />
            </FormItem>

            <FormItem>
                <Label htmlFor={KeysEventEnum.START}>Начало мероприятия</Label>
                <Input
                    value={start}
                    onChange={e => handleField({ value: e.target.value, key: KeysEventEnum.START})}
                    {...inputs["start"]} />
            </FormItem>

            <FormItem>
                <Label htmlFor={KeysEventEnum.FINISH}>Конец мероприятия</Label>
                <Input
                    value={finish}
                    onChange={e => handleField({ value: e.target.value, key: KeysEventEnum.FINISH})}
                    {...inputs["finish"]} />
            </FormItem>
        </EventCreateSection>
    )
}
