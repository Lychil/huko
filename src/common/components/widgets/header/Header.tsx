import { Container } from "@/common/styles/styles";
import { HeaderContent, HeaderWrapper } from "@/common/components/widgets/header/styles";
import Logo from "@/common/components/logo/Logo";

export default function Header() {
    return (
        <HeaderWrapper>
            <Container>
                <HeaderContent>
                    <Logo />
                    <p></p>
                </HeaderContent>
            </Container>
        </HeaderWrapper>
    )
}
