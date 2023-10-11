import { type FC } from 'react'
import { Rating, type RatingProps } from '@mantine/core'

const CustomRating: FC<RatingProps> = ({ className = '', classNames, ...rest }): JSX.Element => {
    return <Rating className={className} classNames={{ ...classNames }} {...rest} />
}

export default CustomRating
