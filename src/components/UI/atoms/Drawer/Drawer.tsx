import React, { type FC } from 'react'
import { Drawer, type DrawerProps } from '@mantine/core'
import { IconX } from '@tabler/icons-react'

const ModalDrawer: FC<DrawerProps> = ({
    size = 'xs',
    opened = false,
    transitionProps = { duration: 150, timingFunction: 'linear' },
    className = '',
    onClose,
    children,
    title = '',
    styles = {
        content: { backgroundColor: '#000000fa' },
        header: { display: 'none' },
    },
    ...rest
}) => {
    return (
        <Drawer
            opened={opened}
            onClose={onClose}
            title={title}
            className={className}
            transitionProps={transitionProps}
            size={size}
            styles={styles}
            closeButtonProps={<IconX />}
            {...rest}
        >
            {children}
        </Drawer>
    )
}

export default ModalDrawer
