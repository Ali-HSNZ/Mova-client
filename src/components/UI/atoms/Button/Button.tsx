import { forwardRef } from 'react'
import { Button, type ButtonProps, createPolymorphicComponent } from '@mantine/core'

const MantineButton = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ children, className = '', classNames, ...rest }, ref) => {
        /**
         * Combining className and classNames to establish a consistent and reusable base style for the component across the project.
         * We can overwrite its style in specific situations for fine-tuned adjustments.
         * Spread remaining props from ButtonProps
         */
        return (
            <Button className={`${className}`} classNames={{ ...classNames }} {...rest} ref={ref}>
                {children}
            </Button>
        )
    }
)

MantineButton.displayName = 'Button'

// Since the MantineButton is a polymorphic component, we are creating a polymorphic component using createPolymorphicComponent.
const CustomButton = createPolymorphicComponent<'button', ButtonProps>(MantineButton)

export default CustomButton
