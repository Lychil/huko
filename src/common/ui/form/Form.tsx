import { ReactNode } from 'react';
import { FormWrapper } from '@/common/ui/form/styles';

interface FormProps {
    width?: string,
    height?: string,
    children: ReactNode
}

export default function Form({width, height, children}: FormProps) {    
    return (
        <FormWrapper style={{width, height}}>
            {children}
        </FormWrapper>
    )
}
