import { type FC } from 'react'
import { Popover, type PopoverTargetProps } from '@mantine/core'

const DPopoverTarget: FC<PopoverTargetProps> = ({ children, ...rest }): JSX.Element => {
    /**
     * Spread remaining props from PopoverTargetProps
     */
    return <Popover.Target {...rest}>{children}</Popover.Target>
}

export default DPopoverTarget
