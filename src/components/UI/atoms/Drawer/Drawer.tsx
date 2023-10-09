import React, { type FC } from 'react'
import { Drawer } from '@mantine/core'
import { IconX } from '@tabler/icons-react'

import { type IDrawerProps } from './resources'

const ModalDrawer: FC<IDrawerProps> = ({
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
        >
            {children}
        </Drawer>
    )
}

export default ModalDrawer
