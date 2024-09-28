import { useInput } from "@/common/hooks/useInput";
import { FormItem } from "@/common/styles/styles";
import { Button, Input, Label } from "@/common/styles/ui/ui";
import { AuthChange, AuthChangeLink, AuthItemForm, AuthItemWrapper, AuthTitle } from "@/common/components/auth/styles";

const regPath = "/auth/reg";

export default function Login() {
    const email = useInput('');
    const password = useInput('');

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

            <Button width="100%" color="white">Создать</Button>
            <AuthChange>Хотите зарегистрироваться? <AuthChangeLink to={regPath}>Регистрация</AuthChangeLink></AuthChange>
        </AuthItemWrapper>
    )
}