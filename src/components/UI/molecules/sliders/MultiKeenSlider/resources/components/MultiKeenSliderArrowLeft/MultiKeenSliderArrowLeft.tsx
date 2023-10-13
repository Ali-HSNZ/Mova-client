import { type FC } from 'react'
import { IconChevronLeft } from '@tabler/icons-react'

import { Button } from '@atoms/Button'

import { type IMultiKeenSliderArrowLeftProps } from './resources'

const MultiKeenSliderArrowLeft: FC<IMultiKeenSliderArrowLeftProps> = ({ disabled, onClick }) => {
    return (
        <Button
            disabled={disabled}
            onClick={onClick}
            size='xs'
            className={`p-0 bg-transparent transition-all duration-200 ${
                disabled ? 'text-grayPrimary' : 'text-yellowPrimary'
            }`}
        >
            <IconChevronLeft />
        </Button>
    )
}

export default MultiKeenSliderArrowLeft
