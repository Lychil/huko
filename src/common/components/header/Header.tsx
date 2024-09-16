import { Container } from "@/common/styles/styles";
import { HeaderContent, HeaderWrapper } from "@/common/components/header/styles";
import Logo from "@/common/components/logo/Logo";
import Auth from "@/common/components/auth/Auth";

export default function Header() {
    return (
        <HeaderWrapper>
            <Container>
                <HeaderContent>
                    <Logo />
                    <Auth />
                </HeaderContent>
            </Container>
        </HeaderWrapper>
    )
}
