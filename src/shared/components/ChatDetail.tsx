import {
    Stack,
    Paper,
    Group,
    Loader,
    TextInput,
    Button,
    Text,
} from '@mantine/core'
import { getChatDataById } from 'pages/Home/data/chatData'
import ChatArea from 'shared/components/ChatArea'
import ChatHeader from 'shared/components/ChatHeader'

interface IChatDetailProps {
    dataId: number
    setDataId: (id: number) => void
}

function ChatDetail({ dataId, setDataId }: IChatDetailProps) {
    return (
        <Stack className="h-full" justify="space-between" gap={'xs'}>
            <ChatHeader
                name={getChatDataById(dataId)?.data.groupName ?? '-'}
                setDataId={setDataId}
                participant={
                    getChatDataById(dataId)?.data.totalParticipants ?? 0
                }
            />

            <ChatArea data={getChatDataById(dataId)?.data.chats ?? []} />

            <Stack>
                {getChatDataById(dataId)?.data.isSupport && (
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
