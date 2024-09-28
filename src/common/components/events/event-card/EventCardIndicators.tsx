import { EventCardIndicator, EventCardIndicatorImg, EventCardIndicatorsWrapper, EventCardIndicatorText } from "@/common/components/events/event-card/styles";
import heartImg from "@/common/images/svg/heart.svg";
import peopleImg from "@/common/images/svg/people.svg";
import clickImg from "@/common/images/svg/click.svg";

const Indicator = ({title, path, count}: {title: string, path: string, count: number}) => {
    return (
        <EventCardIndicator title={title}>
            <EventCardIndicatorImg src={path} />
            <EventCardIndicatorText>{count}</EventCardIndicatorText>
        </EventCardIndicator>
    )
}


export default function EventCardIndicators({indicators}: {indicators: number[]}) {
    const items: {id: number, title: string, path: string, count: number}[] = [
        {
            id: 0,
            title: "Добавлено в избранное",
            count: indicators[2],
            path: heartImg
        },
        {
            id: 1,
            title: "Хочу пойти",
            count: indicators[1],
            path: peopleImg
        },
        {
            id: 2,
            title: "Количество переходов",
            count: indicators[0],
            path: clickImg
        }
    ]
    
    return (
        <EventCardIndicatorsWrapper>
            {
                items.map((elem, i) => <Indicator key={i} title={elem.title} path={elem.path} count={elem.count} />)
            }
        </EventCardIndicatorsWrapper>
    )
}
