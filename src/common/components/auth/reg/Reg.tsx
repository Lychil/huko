import { useInput } from "@/common/hooks/useInput";
import { FormItem } from "@/common/styles/styles";
import { Button, Input, Label } from "@/common/styles/ui/ui";
import { AuthChange, AuthChangeLink, AuthItemForm, AuthItemWrapper, AuthTitle } from "@/common/components/auth/styles";

const loginPath = "/auth/login";

export default function Reg() {
    const email = useInput('');
    const password = useInput('');
    const rPassword = useInput('');

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

            <Button width="100%" color="white">Создать</Button>
            <AuthChange>Уже зарегистрированы? <AuthChangeLink to={loginPath}>Войти</AuthChangeLink></AuthChange>
        </AuthItemWrapper>
    )
}
