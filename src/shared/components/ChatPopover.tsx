import { Popover, ActionIcon, Divider, Image, Text } from '@mantine/core'
import { useState } from 'react'
import MoreIcon from 'assets/icon/more_horiz_24px.svg'

interface IChatPopoverProps {
    mode: 'receiver' | 'sender'
}

function ChatPopover({ mode }: IChatPopoverProps) {
    const [popoverOpened, setPopoverOpened] = useState<boolean>(false)

    return (
        <Popover
            opened={popoverOpened}
            onChange={setPopoverOpened}
            position={mode === 'sender' ? 'bottom-start' : 'bottom-end'}
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
            {mode === 'sender' ? (
                <Popover.Dropdown py={8} px={16}>
                    <Text fz={14} c={'primary_blue'}>
                        Edit
                    </Text>
                    <Divider my={8} mx={-16} />
                    <Text fz={14} c={'indicator_red'}>
                        Delete
                    </Text>
                </Popover.Dropdown>
            ) : (
                <Popover.Dropdown py={8} px={16}>
                    <Text fz={14} c={'primary_blue'}>
                        Share
                    </Text>
                    <Divider my={8} mx={-16} />
                    <Text fz={14} c={'primary_blue'}>
                        Reply
                    </Text>
                </Popover.Dropdown>
            )}
        </Popover>
    )
}

export default ChatPopover
