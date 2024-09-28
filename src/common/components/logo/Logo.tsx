import { DefaultLogo } from "@/common/components/logo/styles";
import logoImg from "@/common/images/svg/logo.svg";

export default function Logo({pointer}: {pointer?: boolean}) {
    return (
        <DefaultLogo style={{cursor: `${pointer ? 'pointer' : 'default'}`}} src={logoImg} />
    )
}
