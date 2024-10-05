import styled from "styled-components";
import { border, font } from "@/common/styles/styleConstants";
import { glass } from "@/common/styles/mixins";
import clickImg from "@/common/images/svg/click.svg";
import heartImg from "@/common/images/svg/heart.svg";
import peopleImg from "@/common/images/svg/people.svg";

const IndicatorsWrapper = styled('div')`
position: absolute;
top: 20px;
right: 20px;
display: flex;
gap: 5px;
`;

const Indicator = styled('div')`
padding: 5px;
display: flex;
gap: 5px;
border-radius: ${border.radius.extraSmall};
${glass}
`;

const IndicatorImg = styled('img')`
width: 15px;
aspect-ratio: 1;
`;

const IndicatorCount = styled('p')`
margin: auto 0;
font-size: ${font.sizes.extraSmall};
font-weight: ${font.weights.medium};
`;

interface EventCardIndicatorsProps {
    want: number,
    favourite: number,
    click: number
}

export default function EventCardIndicators({want, favourite, click}: EventCardIndicatorsProps) {
    return (
        <IndicatorsWrapper>
            <Indicator>
                <IndicatorImg src={clickImg} />
                <IndicatorCount>{click}</IndicatorCount>
            </Indicator>

            <Indicator>
                <IndicatorImg src={peopleImg} />
                <IndicatorCount>{want}</IndicatorCount>
            </Indicator>

            <Indicator>
                <IndicatorImg src={heartImg} />
                <IndicatorCount>{favourite}</IndicatorCount>
            </Indicator>
        </IndicatorsWrapper>
    )
}
