import { Stack, Flex, Paper, Text } from '@mantine/core'
import ChatPopover from 'shared/components/ChatPopover'
import { getHoursMinuteTime } from 'shared/utils/string.utils'

interface IChatBubbleProps {
    mode: 'receiver' | 'sender'
    isSupport: boolean
    recieverMode?: 1 | 2
    name?: string
    chat: string
    time: number
}

function ChatBubble({
    chat,
    mode,
    recieverMode = 1,
    name,
    time,
    isSupport = false,
}: IChatBubbleProps) {
    return (
        <Stack align={mode === 'sender' ? 'flex-end' : 'flex-start'} gap={4}>
            <Text
                fz={14}
                fw={'bold'}
                c={
                    isSupport
                        ? 'primary_blue'
                        : mode === 'sender'
                        ? 'chats_purple'
                        : recieverMode === 1
                        ? 'chats_yellow'
                        : 'chats_green'
                }
                inline
            >
                {name ?? 'You'}
            </Text>
            <Flex
                direction={mode === 'sender' ? 'row' : 'row-reverse'}
                justify={'flex-end'}
            >
                {!isSupport && <ChatPopover mode={mode} />}
                <Paper
                    radius={5}
                    p={'sm'}
                    bg={
                        isSupport
                            ? '#F8F8F8'
                            : mode === 'sender'
                            ? 'chats_purple_dimmed'
                            : recieverMode === 1
                            ? 'chats_yellow_dimmed'
                            : 'chats_green_dimmed'
                    }
                    className="max-w-[80%]"
                >
                    <Stack align="flex-start" gap={8}>
                        <Text fz={14} c={'primary_gray_1'} inline>
                            {chat}
                        </Text>
                        <Text fz={14} c={'primary_gray_1'} inline>
                            {getHoursMinuteTime(new Date(time))}
                        </Text>
                    </Stack>
                </Paper>
            </Flex>
        </Stack>
    )
}

export default ChatBubble
