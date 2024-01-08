import { Stack, Loader, Text } from '@mantine/core'

interface ILoadingProps {
    title: string
}

function Loading({ title }: ILoadingProps) {
    return (
        <Stack align="center" justify="center" className="h-full w-full">
            <Loader size={60} color="#C4C4C4" />
            <Text c={'primary_gray_1'} fz={14} fw={'bold'}>
                {title}
            </Text>
        </Stack>
    )
}

export default Loading
