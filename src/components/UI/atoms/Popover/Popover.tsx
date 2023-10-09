import { type FC } from 'react'
import { Popover, type PopoverProps } from '@mantine/core'

const CustomPopover: FC<PopoverProps & { dropdownClassName: string }> = ({
    opened,
    children,
    dropdownClassName,
    withArrow = true,
    position = 'bottom',
    styles,
}) => {
    return (
        <Popover opened={opened} position={position} styles={styles} withArrow={withArrow}>
            {/* Popup Dropdown */}
            <Popover.Dropdown className={dropdownClassName}>{children}</Popover.Dropdown>
        </Popover>
    )
}

export default CustomPopover
