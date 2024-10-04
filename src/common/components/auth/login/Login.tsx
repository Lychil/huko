import { useInput } from "@/common/hooks/useInput";
import { FormItem } from "@/common/styles/styles";
import { Button, Input, Label } from "@/common/styles/ui/ui";
import { AuthChange, AuthChangeLink, AuthItemForm, AuthItemWrapper, AuthTitle } from "@/common/components/auth/styles";
import { routes } from "@/router/routes";
import { useLoginMutation } from "@/store/reducers/user/userApi";
import { useNavigate } from "react-router-dom";

const regPath = routes.regPath;
const homePath = routes.homePath;

export default function Login() {
    const [login] = useLoginMutation();
    const navigate = useNavigate();
    const email = useInput('');
    const password = useInput('');

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        await login({ email: email.value, password: password.value }).then(res => {
            if (res.error && 'data' in res.error) {
                const error = res.error.data as {error: string};
                console.log(error);
            } else {
                navigate(homePath);
            }
        }
        )
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