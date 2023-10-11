import { type FC } from 'react'
import { Progress, type ProgressProps } from '@mantine/core'

const CustomProgress: FC<ProgressProps> = ({ className = '', classNames, ...rest }): JSX.Element => {
    return <Progress className={className} classNames={{ ...classNames }} {...rest} />
}

export default CustomProgress
