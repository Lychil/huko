import { EventCardIndicator, EventCardIndicatorImg, EventCardIndicatorsWrapper, EventCardIndicatorText } from "@/common/components/event-card/styles";
import heartImg from "@/common/images/svg/heart.svg";
import peopleImg from "@/common/images/svg/people.svg";
import clickImg from "@/common/images/svg/click.svg";

const Indicator = ({title, path}: {title: string, path: string}) => {
    return (
        <EventCardIndicator title={title}>
            <EventCardIndicatorImg src={path} />
            <EventCardIndicatorText>0</EventCardIndicatorText>
        </EventCardIndicator>
    )
}

const indicators: {id: number, title: string, path: string}[] = [
    {
        id: 0,
        title: "Добавлено в избранное",
        path: heartImg
    },
    {
        id: 1,
        title: "Хочу пойти",
        path: peopleImg
    },
    {
        id: 2,
        title: "Количество переходов",
        path: clickImg
    }
]

export default function EventCardIndicators() {
    return (
        <EventCardIndicatorsWrapper>
            {
                indicators.map(elem => <Indicator title={elem.title} path={elem.path} />)
            }
        </EventCardIndicatorsWrapper>
    )
}
