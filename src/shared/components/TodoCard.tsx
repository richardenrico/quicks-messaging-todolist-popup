import {
    Group,
    Checkbox,
    ActionIcon,
    Stack,
    Divider,
    Text,
    Image,
    TextInput,
} from '@mantine/core'
import TodoDate from 'shared/components/TodoDate'
import TodoDescription from 'shared/components/TodoDescription'
import { useState } from 'react'
import ExpandMoreIcon from 'assets/icon/expand_more_24px.svg'
import ExpandLessIcon from 'assets/icon/expand_less_24px.svg'
import { calculateDateRange, getDDMMYYYYDate } from 'shared/utils/string.utils'
import TodoPopover from 'shared/components/TodoPopover'
import { COLORS } from 'shared/utils/colors'
import TodoTags from 'shared/components/TodoTags'
import { ListTagsResponse } from 'shared/api/todo/todo'

interface ITodoCardProps {
    todoId: number
    title: string
    deadline: number | null
    description: string
    completed: boolean
    lastIndex: boolean
    tags: ListTagsResponse
    updateTags: (
        index: number,
        newTags: {
            id: number
            name: string
            color: string
        }
    ) => void
}

function TodoCard({
    todoId,
    completed,
    deadline,
    description,
    title,
    lastIndex,
    tags,
    updateTags,
}: ITodoCardProps) {
    const [expand, setExpand] = useState<boolean>(false)
    const [checked, setChecked] = useState<boolean>(completed)
    const [dueDate, setDueDate] = useState<Date | null>(
        deadline ? new Date(deadline * 1000) : null
    )
    const [desc, setDesc] = useState<string>(description)

    return (
        <>
            <Group justify="space-between" wrap="nowrap">
                <Group gap={'sm'} wrap="nowrap">
                    <Checkbox
                        checked={checked}
                        onChange={(event) =>
                            setChecked(event.currentTarget.checked)
                        }
                        radius="xs"
                        color="primary_gray_2"
                        variant="outline"
                    />
                    {title ? (
                        <Text
                            c={'primary_gray_1'}
                            fz={14}
                            fw={'bold'}
                            maw={356}
                            td={checked ? 'line-through' : 'none'}
                        >
                            {title}
                        </Text>
                    ) : (
                        <TextInput
                            radius={5}
                            size={'sm'}
                            w={380}
                            placeholder="Type Task Title"
                            styles={{
                                input: {
                                    borderColor: '#4F4F4F',
                                    color: COLORS.primary_gray_1,
                                },
                            }}
                        />
                    )}
                </Group>

                <Group justify="flex-end" gap={'sm'} wrap="nowrap">
                    {dueDate && !checked && (
                        <Text c={'indicator_red'} fz={14}>
                            {calculateDateRange(dueDate ?? new Date())}
                        </Text>
                    )}
                    {dueDate && (
                        <Text c={'primary_gray_1'} fz={14}>
                            {getDDMMYYYYDate(dueDate ?? new Date())}
                        </Text>
                    )}
                    <ActionIcon
                        variant="transparent"
                        onClick={() => setExpand((value) => !value)}
                    >
                        <Image
                            src={expand ? ExpandLessIcon : ExpandMoreIcon}
                            style={{
                                height: '40%',
                            }}
                        />
                    </ActionIcon>
                    <TodoPopover todoId={todoId} />
                </Group>
            </Group>

            {expand && (
                <Stack mx={'xl'}>
                    <TodoDate setValue={setDueDate} value={dueDate} />
                    <TodoDescription setValue={setDesc} value={desc} />
                    <TodoTags todoId={todoId} data={tags} updateTags={updateTags} />
                </Stack>
            )}

            {!lastIndex && <Divider size={1} c={'primary_gray_2'} />}
        </>
    )
}

export default TodoCard
