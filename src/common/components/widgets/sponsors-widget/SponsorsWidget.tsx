import { SponsorsWidgetWrapper, SponsorWidget, SponsorWidgetLogo, SponsorWidgetQuantity, SponsorWidgetQuantityCount, SponsorWidgetQuantityImg } from "@/common/components/widgets/sponsors-widget/styles";
import tLogoImg from "@/common/images/svg/t-logo.svg";
import fireImg from "@/common/images/svg/fire.svg";

export default function SponsorsWidget() {
    return (
        <SponsorsWidgetWrapper>
            <SponsorWidget>
                <SponsorWidgetLogo src={tLogoImg} />
                <SponsorWidgetQuantity>
                    <SponsorWidgetQuantityImg src={fireImg} />
                    <SponsorWidgetQuantityCount>0</SponsorWidgetQuantityCount>
                </SponsorWidgetQuantity>
            </SponsorWidget>
            <SponsorWidget>
                <SponsorWidgetLogo src={tLogoImg} />
                <SponsorWidgetQuantity>
                    <SponsorWidgetQuantityImg src={fireImg} />
                    <SponsorWidgetQuantityCount>0</SponsorWidgetQuantityCount>
                </SponsorWidgetQuantity>
            </SponsorWidget>
            <SponsorWidget>
                <SponsorWidgetLogo src={tLogoImg} />
                <SponsorWidgetQuantity>
                    <SponsorWidgetQuantityImg src={fireImg} />
                    <SponsorWidgetQuantityCount>0</SponsorWidgetQuantityCount>
                </SponsorWidgetQuantity>
            </SponsorWidget>
        </SponsorsWidgetWrapper>
    )
}
