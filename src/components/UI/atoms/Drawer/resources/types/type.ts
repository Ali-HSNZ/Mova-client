import { type MantineNumberSize, type ModalBaseStylesNames, type Styles, type TransitionProps } from '@mantine/core'

interface IDrawerProps {
    styles: Styles<ModalBaseStylesNames>
    size?: MantineNumberSize
    title?: string
    children: JSX.Element
    className: string
    onClose: () => void
    transitionProps: Partial<Omit<TransitionProps, 'mounted'>>
    opened: boolean
}
export default IDrawerProps
