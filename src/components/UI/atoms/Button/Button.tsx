import { type FC } from 'react'
import { Button, type ButtonProps, createPolymorphicComponent } from '@mantine/core'

const CustomButton: FC<ButtonProps> = ({ children, className = '', classNames, ...rest }) => {
    return (
        <Button className={`${className}`} classNames={{ ...classNames }} {...rest}>
            {children}
        </Button>
    )
}

// Since the MantineButton is a polymorphic component, we are creating a polymorphic component using createPolymorphicComponent.
const MantineButton = createPolymorphicComponent<'button', ButtonProps>(CustomButton)

export default MantineButton
