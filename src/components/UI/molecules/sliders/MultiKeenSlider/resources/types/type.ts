import { type KeenSliderOptions } from 'keen-slider'

interface IMultiKeenSliderProps {
    children: JSX.Element
    keenSliderOptions?: KeenSliderOptions
    title?: string
    seeMoreLinkHref?: string
    seeMoreLinkTitle?: string
    isMoreOption?: boolean
}

export type { IMultiKeenSliderProps }
