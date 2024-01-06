import { Stack, TextInput, ScrollArea } from '@mantine/core'
import Search24BlackIcon from 'assets/icon/search_black_24px.svg'
import { getChatListData } from 'pages/Home/data/chatData'
import ChatCard from 'shared/components/ChatCard'

interface IChatListProps {
    setDataId: (id: number) => void
}

function ChatList({ setDataId }: IChatListProps) {
    return (
        <Stack className="h-full">
            <TextInput
                rightSection={<img src={Search24BlackIcon} />}
                radius={5}
                size="sm"
                placeholder="Search"
                styles={{
                    input: {
                        borderColor: '#828282',
                        paddingLeft: 30,
                        color: 'black',
                    },
                }}
            />
            <ScrollArea className="h-full" offsetScrollbars>
                <Stack gap={22}>
                    {getChatListData().map((data, index) => (
                        <ChatCard
                            chat={data.chat}
                            isGroup={data.isGroup}
                            time={data.time}
                            title={data.title}
                            groupSender={data.groupSender}
                            newMessage={data.newMessage}
                            lastIndex={index !== getChatListData().length}
                            onClick={() => setDataId(data.id)}
                        />
                    ))}
                </Stack>
            </ScrollArea>
        </Stack>
    )
}

export default ChatList
