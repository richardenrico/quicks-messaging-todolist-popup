import { Popover, ActionIcon, Image, Text, Button } from '@mantine/core'
import { useState } from 'react'
import MoreIcon from 'assets/icon/more_horiz_24px.svg'
import useDeleteTodoById from 'shared/api/todo/hooks/useDeleteTodoById.mutation'

interface ITodoPopoverProps {
    todoId: number
}

function TodoPopover({ todoId }: ITodoPopoverProps) {
    const [popoverOpened, setPopoverOpened] = useState<boolean>(false)

    const deleteTodo = useDeleteTodoById()

    return (
        <Popover
            opened={popoverOpened}
            onChange={setPopoverOpened}
            position={'bottom-end'}
            offset={-3}
            radius={5}
            width={126}
        >
            <Popover.Target>
                <ActionIcon
                    variant="transparent"
                    c={'#333333'}
                    onClick={() => setPopoverOpened((value) => !value)}
                >
                    <Image
                        src={MoreIcon}
                        style={{
                            height: '20%',
                        }}
                    />
                </ActionIcon>
            </Popover.Target>
            <Popover.Dropdown py={8} px={16}>
                <Button
                    variant={'transparent'}
                    p={0}
                    color="indicator_red"
                    onClick={() => deleteTodo.mutate(todoId)}
                >
                    <Text fz={14} c={'indicator_red'}>
                        Delete
                    </Text>
                </Button>
            </Popover.Dropdown>
        </Popover>
    )
}

export default TodoPopover
