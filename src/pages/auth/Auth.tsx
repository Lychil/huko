import Form from "@/common/ui/form/Form";
import { AuthWrapper } from "./styles";
import { Outlet } from "react-router-dom";
import Logo from "@/common/components/logo/Logo";

export default function Auth() {
    return (
        <AuthWrapper>
            <Form width="300px">
                <Logo pointer={false} />
                <Outlet />
            </Form>
        </AuthWrapper>
    )
}
