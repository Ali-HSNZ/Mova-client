import { type FC } from 'react'
import { IconChevronRight } from '@tabler/icons-react'

import { Button } from '@atoms/Button'

import { type IKeenSliderArrowRightProps } from './resources'

const MainKeenSliderArrowRight: FC<IKeenSliderArrowRightProps> = ({ disabled, onClick }) => {
    return (
        <div className={`absolute top-1/2 -translate-y-1/2 right-4`}>
            <Button
                disabled={disabled}
                onClick={onClick}
                size='md'
                className={`px-2 ${
                    disabled ? 'bg-opacity-secondary bg-grayPrimary text-graySecondary' : 'bg-opacity-primary'
                } transition-all duration-200 bg-grayPrimary rounded-xl`}
            >
                <IconChevronRight />
            </Button>
        </div>
    )
}

export default MainKeenSliderArrowRight
