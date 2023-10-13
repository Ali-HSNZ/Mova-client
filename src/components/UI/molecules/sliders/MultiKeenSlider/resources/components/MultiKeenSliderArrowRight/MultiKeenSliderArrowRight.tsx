import { type FC } from 'react'
import { IconChevronRight } from '@tabler/icons-react'

import { Button } from '@atoms/Button'

import { type IMultiKeenSliderArrowRightProps } from './resources'

const MultiKeenSliderArrowRight: FC<IMultiKeenSliderArrowRightProps> = ({ disabled, onClick }) => {
    return (
        <Button
            disabled={disabled}
            onClick={onClick}
            size='xs'
            className={`p-0 bg-transparent transition-all duration-200 ${
                disabled ? 'text-grayPrimary' : 'text-yellowPrimary'
            }`}
        >
            <IconChevronRight />
        </Button>
    )
}

export default MultiKeenSliderArrowRight
