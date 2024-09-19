import { ReactNode } from 'react'
import { WidgetTitle, WidgetWrapper } from './styles'

interface WidgetProps {
    title: string,
    children: ReactNode
}

export default function Widget({title, children}: WidgetProps) {
    return (
        <WidgetWrapper>
            <WidgetTitle>{title}</WidgetTitle>
            {children}
        </WidgetWrapper>
    )
}
