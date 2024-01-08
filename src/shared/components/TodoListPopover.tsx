import { Group, Popover, Button, Divider, Image, Text } from '@mantine/core'
import { useState } from 'react'
import { COLORS } from 'shared/utils/colors'
import ExpandMoreIcon from 'assets/icon/expand_more_24px.svg'

function TodoListPopover() {
    const [popoverOpened, setPopoverOpened] = useState<boolean>(false)

    return (
        <Group w={288} justify="center">
            <Popover
                opened={popoverOpened}
                onChange={setPopoverOpened}
                position={'bottom'}
                offset={7}
                radius={5}
                width={288}
                styles={{
                    dropdown: {
                        borderColor: COLORS.primary_gray_2,
                    },
                }}
            >
                <Popover.Target>
                    <Button
                        rightSection={<Image src={ExpandMoreIcon} />}
                        variant="outline"
                        color="primary_gray_1"
                        onClick={() => setPopoverOpened((value) => !value)}
                    >
                        <Text c={'primary_gray_1'} fz={14} fw={'bold'}>
                            My Tasks
                        </Text>
                    </Button>
                </Popover.Target>
                <Popover.Dropdown py={8} px={16}>
                    <Button
                        variant={'transparent'}
                        p={0}
                        color="primary_gray_1"
                    >
                        <Text c={'primary_gray_1'} fz={14} fw={'bold'}>
                            Personal Errands
                        </Text>
                    </Button>
                    <Divider my={8} mx={-16} color="primary_gray_1" />
                    <Button
                        variant={'transparent'}
                        p={0}
                        color="primary_gray_1"
                    >
                        <Text c={'primary_gray_1'} fz={14} fw={'bold'}>
                            Urgent To-Do
                        </Text>
                    </Button>
                </Popover.Dropdown>
            </Popover>
        </Group>
    )
}

export default TodoListPopover
