import { type FC } from 'react'
import { IconChevronLeft } from '@tabler/icons-react'

import { Button } from '@atoms/Button'

import { type IKeenSliderArrowLeftProps } from './resources'

const MainKeenSliderArrowLeft: FC<IKeenSliderArrowLeftProps> = ({ disabled, onClick }) => {
    return (
        <div className={`absolute top-1/2 -translate-y-1/2 left-4`}>
            <Button
                disabled={disabled}
                onClick={onClick}
                size='md'
                className={`px-2 ${
                    disabled ? 'bg-opacity-secondary bg-grayPrimary text-graySecondary' : 'bg-opacity-primary'
                } transition-all duration-200 bg-grayPrimary rounded-xl`}
            >
                <IconChevronLeft />
            </Button>
        </div>
    )
}

export default MainKeenSliderArrowLeft
