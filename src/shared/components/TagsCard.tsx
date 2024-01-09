import { Paper, Group, Text } from '@mantine/core'
import { COLORS } from 'shared/utils/colors'

interface ITagsCardProps {
    tagId: number
    todoId: number
    text: string
    textSize: number
    cardColor: string
    widthMode: 'fit' | 'full'
    selected?: boolean
    updateTags: (
        index: number,
        newTags: {
            id: number
            name: string
            color: string
        }
    ) => void
}

function TagsCard({
    tagId,
    todoId,
    cardColor,
    selected = false,
    text,
    textSize,
    widthMode,
    updateTags
}: ITagsCardProps) {
    return (
        <Paper
            h={28}
            bg={cardColor}
            className={`w-${widthMode} cursor-pointer`}
            withBorder={selected}
            styles={{
                root: {
                    borderColor: COLORS.primary_blue,
                    borderWidth: 1
                },
            }}
            onClick={() => updateTags(todoId - 1, {
                id: tagId,
                name: text,
                color: cardColor
            })}
        >
            <Group mx={10} className="h-full">
                <Text fz={textSize} fw={'bold'} c={'primary_gray_1'}>
                    {text}
                </Text>
            </Group>
        </Paper>
    )
}

export default TagsCard
