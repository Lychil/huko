import { useNavigate } from "react-router-dom";
import { useInput } from "@/common/hooks/useInput";
import { useLoginMutation } from "@/store/reducers/user/userApi";
import { Button, Input, Label } from "@/common/styles/ui/ui";
import { AuthChange, AuthChangeLink, AuthItemForm, AuthItemWrapper, AuthTitle } from "@/common/components/auth/styles";
import { FormItem } from "@/common/styles/styles";
import { routes } from "@/router/routes";

const regPath = routes.regPath;
const homePath = routes.homePath;

export default function Login() {
    const [login] = useLoginMutation();
    const navigate = useNavigate();
    const email = useInput('');
    const password = useInput('');

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const response = await login({ email: email.value, password: password.value }).then(res => res);
        if (response.error && 'data' in response.error) {
            // ToDo
            const error = response.error.data as { error: string };
        } else {
            navigate(homePath);
        }
    }

    return (
        <AuthItemWrapper>
            {/* ToDo */}
            <AuthTitle>Войти</AuthTitle>
            <AuthItemForm>
                <FormItem>
                    <Label color="white" htmlFor="email">Email</Label>
                    <Input color="white" id="name" value={email.value} onChange={email.handleChange} placeholder="Введите свой emai..." />
                </FormItem>

                <FormItem>
                    <Label color="white" htmlFor="password">Пароль</Label>
                    <Input color="white" id="password" value={password.value} onChange={password.handleChange} placeholder="Введите свой пароль..." />
                </FormItem>
            </AuthItemForm>

            <Button width="100%" color="white" onClick={handleSubmit}>Создать</Button>
            <AuthChange>Хотите зарегистрироваться? <AuthChangeLink to={regPath}>Регистрация</AuthChangeLink></AuthChange>
        </AuthItemWrapper>
    )
}