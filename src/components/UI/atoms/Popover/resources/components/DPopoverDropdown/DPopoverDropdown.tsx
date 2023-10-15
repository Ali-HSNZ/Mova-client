import { type FC } from 'react'
import { Popover, type PopoverDropdownProps } from '@mantine/core'

const DPopoverDropdown: FC<PopoverDropdownProps> = ({ children, className = '', ...rest }): JSX.Element => {
    /**
     * Combining className to establish a consistent and reusable base style for the component across the project.
     * We can overwrite its style in specific situations for fine-tuned adjustments.
     * Spread remaining props from PopoverDropdownProps
     */
    return (
        <Popover.Dropdown className={`${className}`} {...rest}>
            {children}
        </Popover.Dropdown>
    )
}

export default DPopoverDropdown
