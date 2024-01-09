import {
    Stack,
    Paper,
    Group,
    Loader,
    TextInput,
    Button,
    Text,
} from '@mantine/core'
import { useEffect, useState } from 'react'
import { ChatResponse } from 'shared/api/chat/chat'
import useGetChatById from 'shared/api/chat/hooks/useGetChatById.query'
import ChatArea from 'shared/components/ChatArea'
import ChatHeader from 'shared/components/ChatHeader'
import Loading from 'shared/components/Loading'

interface IChatDetailProps {
    dataId: number
    setDataId: (id: number) => void
}

function ChatDetail({ dataId, setDataId }: IChatDetailProps) {
    const [data, setData] = useState<ChatResponse>({
        id: 0,
        data: {
            groupName: '-',
            totalParticipants: 0,
            isSupport: false,
            chats: [],
        },
    })

    const chat = useGetChatById(dataId)

    useEffect(() => {
        if (chat.data) {
            const temp: ChatResponse = chat.data

            setData(temp)
        }
    }, [chat.data, chat.isSuccess])

    return (
        <Stack className="h-full" justify="space-between" gap={'xs'}>
            <ChatHeader
                name={data.data.groupName ?? '-'}
                setDataId={setDataId}
                participant={data.data.totalParticipants ?? 0}
            />

            {chat.isSuccess ? (
                <ChatArea
                    isSupport={data.data.isSupport ?? false}
                    data={data.data.chats ?? []}
                />
            ) : (
                <Loading title="Loading Chats ..." />
            )}

            <Stack>
                {data.data.isSupport && (
                    <Paper p={10} radius={5} bg={'stickers_blue'}>
                        <Group gap={'sm'}>
                            <Loader size={28} color={'primary_blue'} />
                            <Text
                                fz={14}
                                fw={'bold'}
                                c={'primary_gray_1'}
                                inline
                            >
                                Please wait while we connect you with one of our
                                team ...
                            </Text>
                        </Group>
                    </Paper>
                )}
                <Group wrap="nowrap">
                    <TextInput
                        radius={5}
                        size={'sm'}
                        className="w-full"
                        placeholder="Type a new message"
                        styles={{
                            input: {
                                // backgroundColor: '#4F4F4F',
                                borderColor: '#4F4F4F',
                                // color: 'white',
                            },
                        }}
                    />
                    <Button w={80} size={'sm'}>
                        Send
                    </Button>
                </Group>
            </Stack>
        </Stack>
    )
}

export default ChatDetail
