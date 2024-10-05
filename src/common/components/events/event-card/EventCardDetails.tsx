import styled from 'styled-components';
import { colors, font } from '@/common/styles/styleConstants';
import clockImg from "@/common/images/svg/clock.svg";
import locationImg from "@/common/images/svg/location.svg";

const DetailsWrapper = styled('div')`
display: flex;
flex-direction: column;
gap: 5px;
`;

const DetailsItem = styled('div')`
display: flex;
gap: 5px;
`;

const DetailsItemImg = styled('img')`
width: 15px;
aspect-ratio: 1;
`;

const DetailsItemText = styled('div')`
margin: auto 0;
font-size: ${font.sizes.extraSmall};
font-weight: ${font.weights.medium};
color: ${colors.details};
`;

interface EventCardDetailsProps {
    location: string,
    start: string,
    finish: string
}

export default function EventCardDetails({location, start, finish}: EventCardDetailsProps) {
    return (
        <DetailsWrapper>
            <DetailsItem>
                <DetailsItemImg src={locationImg} />
                <DetailsItemText>{location}</DetailsItemText>
            </DetailsItem>
            <DetailsItem>
                <DetailsItemImg src={clockImg} />
                <DetailsItemText>{start} - {finish}</DetailsItemText>
            </DetailsItem>
        </DetailsWrapper>
    )
}
