import { Group, Paper } from '@mantine/core'
import { useState, useEffect } from 'react'
import useGetListTags from 'shared/api/todo/hooks/useGetListTags.query'
import { ListTagsResponse } from 'shared/api/todo/todo'
import TagsCard from 'shared/components/TagsCard'
import TagsPopover from 'shared/components/TagsPopover'

interface ITodoTagsProps {
    todoId: number
    data: ListTagsResponse
    updateTags: (
        index: number,
        newTags: {
            id: number
            name: string
            color: string
        }
    ) => void
}

interface ITodoTagsData {
    id: number
    name: string
    color: string
    selected: boolean
}

function TodoTags({ todoId, data, updateTags }: ITodoTagsProps) {
    const [tags, setTags] = useState<ITodoTagsData[]>([])

    const tagsList = useGetListTags()

    useEffect(() => {
        if (tagsList.data) {
            const temp: ITodoTagsData[] = tagsList.data.map((tag) => {
                const isSelected = data.some((data) => data.id === tag.id)
                return {
                    id: tag.id,
                    color: tag.color,
                    name: tag.name,
                    selected: isSelected ? true : false
                }
            })

            setTags(temp)
        }
    }, [data, tagsList.data, tagsList.isSuccess])

    return (
        <Paper className="-mx-4" mih={50} bg={'#F9F9F9'} p={10} radius={5}>
            <Group align="flex-start" className="h-full" wrap="nowrap">
                <TagsPopover id={todoId} tags={tags} updateTags={updateTags} />

                <Group gap={10}>
                    {data.map((d, index) => (
                        <TagsCard
                            key={index}
                            todoId={todoId}
                            tagId={d.id}
                            text={d.name}
                            textSize={12}
                            cardColor={d.color}
                            widthMode={'fit'}
                            updateTags={updateTags}
                        />
                    ))}
                </Group>
            </Group>
        </Paper>
    )
}

export default TodoTags
