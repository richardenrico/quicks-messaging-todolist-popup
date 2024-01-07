import { Paper } from '@mantine/core'
import { PropsWithChildren } from 'react'

interface IBasePopupProps extends PropsWithChildren {}

function BasePopup({ children }: IBasePopupProps) {
    return (
        <Paper
            px={32}
            py={24}
            radius={5}
            className="border-[1px] border-primary_gray_2 w-[737px] h-[450px] 2xl:h-[734px]"
        >
            {children}
        </Paper>
    )
}

export default BasePopup
