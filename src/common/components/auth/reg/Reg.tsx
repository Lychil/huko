import { useInput } from "@/common/hooks/useInput";
import { FormItem } from "@/common/styles/styles";
import { Button, Input, Label } from "@/common/styles/ui/ui";
import { AuthChange, AuthChangeLink, AuthItemForm, AuthItemWrapper, AuthTitle } from "@/common/components/auth/styles";
import { routes } from "@/router/routes";
import { useNavigate } from "react-router-dom";
import { useCreateUserMutation } from "@/store/reducers/user/userApi";

const loginPath = routes.loginPath;
const homePath = routes.homePath;

export default function Reg() {
    const [createUser] = useCreateUserMutation();
    const navigate = useNavigate();
    const email = useInput('');
    const password = useInput('');
    const rPassword = useInput('');

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        createUser({ email: email.value, password: password.value }).then(res => {
            if (res.error && 'data' in res.error) {
                const error = res.error.data as { error: string };
                console.log(error);
            } else {
                navigate(homePath);
            }
        })
    }

    return (
        <AuthItemWrapper>
            <AuthTitle>Зарегистрироваться</AuthTitle>
            <AuthItemForm>
                <FormItem>
                    <Label color="white" htmlFor="email">Email</Label>
                    <Input color="white" id="name" value={email.value} onChange={email.handleChange} placeholder="Введите свой emai..." />
                </FormItem>

                <FormItem>
                    <Label color="white" htmlFor="password">Пароль</Label>
                    <Input color="white" id="password" value={password.value} onChange={password.handleChange} placeholder="Введите свой пароль..." />
                </FormItem>

                <FormItem>
                    <Label color="white" htmlFor="r-password">Повторите пароль</Label>
                    <Input color="white" id="r-password" value={rPassword.value} onChange={rPassword.handleChange} placeholder="Повторите пароль..." />
                </FormItem>
            </AuthItemForm>

            <Button width="100%" color="white" onClick={handleSubmit}>Создать</Button>
            <AuthChange>Уже зарегистрированы? <AuthChangeLink to={loginPath}>Войти</AuthChangeLink></AuthChange>
        </AuthItemWrapper>
    )
}
