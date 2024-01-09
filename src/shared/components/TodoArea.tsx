import { Stack, Group, Button, ScrollArea, Text } from '@mantine/core'
import { useState, useEffect } from 'react'
import useGetListTodo from 'shared/api/todo/hooks/useGetListTodo.query'
import { ListTodoResponse } from 'shared/api/todo/todo'
import Loading from 'shared/components/Loading'
import TodoCard from 'shared/components/TodoCard'
import TodoListPopover from 'shared/components/TodoListPopover'

function TodoArea() {
    const [data, setData] = useState<ListTodoResponse>([])

    const todoList = useGetListTodo()

    useEffect(() => {
        if (todoList.data) {
            const temp: ListTodoResponse = todoList.data

            setData(temp)
        }
    }, [todoList.data, todoList.isSuccess])

    const updateTags = (
        index: number,
        newTags: {
            id: number
            name: string
            color: string
        }
    ) => {
        setData((prevTasks) => {
            const newTasks = [...prevTasks]

            const isExist = newTasks[index].tags.find(
                (task) => task.id === newTags.id
            )

            console.log(newTasks[index]);
            

            if (isExist) {
                newTasks[index] = {
                    ...newTasks[index],
                    tags: newTasks[index].tags.filter(
                        (tag) => tag.id !== newTags.id
                    ),
                }
            } else {
                newTasks[index] = {
                    ...newTasks[index],
                    tags: [...newTasks[index].tags, newTags],
                }
            }

            return newTasks
        })
    }

    return (
        <Stack gap={22} className="h-full">
            <Group justify="space-between">
                <TodoListPopover />
                <Button
                    color="primary_blue"
                    onClick={() =>
                        setData((prevValue) => {
                            return [
                                ...prevValue,
                                {
                                    id: (prevValue.at(-1)?.id ?? 0) + 1,
                                    title: '',
                                    deadline: 0,
                                    description: '',
                                    completed: false,
                                    tags: [],
                                },
                            ]
                        })
                    }
                >
                    <Text fz={14} fw={'bold'}>
                        New Task
                    </Text>
                </Button>
            </Group>

            {todoList.isSuccess ? (
                <ScrollArea className="h-full" offsetScrollbars>
                    <Stack gap={22}>
                        {data.map((d, index) => (
                            <TodoCard
                                key={index}
                                todoId={d.id}
                                title={d.title}
                                deadline={d.deadline}
                                description={d.description}
                                completed={d.completed}
                                lastIndex={index + 1 === data.length}
                                tags={d.tags}
                                updateTags={updateTags}
                            />
                        ))}
                    </Stack>
                </ScrollArea>
            ) : (
                <Loading title="Loading Todo List ..." />
            )}
        </Stack>
    )
}

export default TodoArea
