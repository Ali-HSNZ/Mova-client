import { type FC, type ReactComponentElement } from 'react'
import { type PopoverDropdownProps, type PopoverProps, type PopoverTargetProps } from '@mantine/core'

type TAllowedChildrenType = ReactComponentElement<FC<PopoverDropdownProps>, PopoverDropdownProps> &
    ReactComponentElement<FC<PopoverTargetProps>, PopoverTargetProps>

interface IPopoverProps extends Omit<PopoverProps, 'children'> {
    children: Array<TAllowedChildrenType>
}

type TDPopoverType = FC<IPopoverProps> & { Target: FC<PopoverTargetProps> } & { Dropdown: FC<PopoverDropdownProps> }

export default TDPopoverType
