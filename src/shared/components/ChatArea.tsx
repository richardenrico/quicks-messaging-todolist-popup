import { ScrollArea, Stack, Divider, Text } from '@mantine/core'
import ChatBubble from 'shared/components/ChatBubble'
import {
    getFullDayTime,
    getGroupedMessageByDay,
} from 'shared/utils/string.utils'

interface IChatAreaProps {
    data: Array<{
        mode: string
        receiverMode: number
        sender: string
        message: string
        timestamp: number
        isRead: boolean
    }>
}
interface IChatData {
    time: number
    chats: Array<{
        mode: string
        receiverMode: number
        sender: string
        message: string
        timestamp: number
        isRead: boolean
    }>
}

function ChatArea({ data }: IChatAreaProps) {
    const chatData: IChatData[] = getGroupedMessageByDay(data)
    let isReadIndexFirst = -1

    return (
        <ScrollArea className="h-full" offsetScrollbars>
            <Stack>
                {chatData.map((data, index) => {
                    return (
                        <>
                            <Divider
                                key={`chat-area-time-${index}`}
                                color={'primary_gray_1'}
                                label={
                                    <Text fw={700} fz={14}>
                                        {getFullDayTime(
                                            new Date(data.time)
                                        )}
                                    </Text>
                                }
                                labelPosition="center"
                            />
                            {data.chats.map((chat, index) => {
                                if (
                                    chat.isRead === false &&
                                    isReadIndexFirst === -1
                                ) {
                                    isReadIndexFirst = index
                                }
                                return (
                                    <>
                                        {isReadIndexFirst === index && (
                                            <Divider
                                                key={`chat-area-notification-${index}`}
                                                color={'indicator_red'}
                                                label={
                                                    <Text fw={700} fz={14}>
                                                        New Message
                                                    </Text>
                                                }
                                                labelPosition="center"
                                            />
                                        )}
                                        <ChatBubble
                                            key={`chat-area-${index}`}
                                            mode={
                                                chat.mode === 'sender'
                                                    ? 'sender'
                                                    : 'receiver'
                                            }
                                            chat={chat.message}
                                            time={chat.timestamp * 1000}
                                            name={chat.sender}
                                            recieverMode={
                                                chat.receiverMode === 1 ? 1 : 2
                                            }
                                        />
                                    </>
                                )
                            })}
                        </>
                    )
                }) ?? []}
            </Stack>
        </ScrollArea>
    )
}

export default ChatArea
