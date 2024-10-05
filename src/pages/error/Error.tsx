import { ErrorMessage, ErrorMessageCode, ErrorMessageLink, ErrorMessageText, ErrorWrapper } from "@/pages/error/styles";
import { routes } from "@/router/routes";

const homePath = routes.homePath;

export default function Error() {
    return (
        <ErrorWrapper>
            <ErrorMessage>
                <ErrorMessageCode>404</ErrorMessageCode>
                <ErrorMessageText>
                    {"Что-то пошло не так:("}
                </ErrorMessageText>
                <ErrorMessageLink to={homePath}>Перейти на главную</ErrorMessageLink>
            </ErrorMessage>
        </ErrorWrapper>
    )
}
