import {
    Stack,
    TextInput,
    ScrollArea,
} from '@mantine/core'
import Search24BlackIcon from 'assets/icon/search_black_24px.svg'
import { useEffect, useState } from 'react'
import { ListChatResponse } from 'shared/api/chat/chat'
import useGetListChatData from 'shared/api/chat/hooks/useGetListChatData.query'
import ChatCard from 'shared/components/ChatCard'
import Loading from 'shared/components/Loading'

interface IChatListProps {
    setDataId: (id: number) => void
}

function ChatList({ setDataId }: IChatListProps) {
    const [data, setData] = useState<ListChatResponse>([])

    const chatList = useGetListChatData()

    useEffect(() => {
        if (chatList.data) {
            const temp: ListChatResponse = chatList.data

            setData(temp)
        }
    }, [chatList.data, chatList.isSuccess])

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

            {chatList.isSuccess === true ? (
                <ScrollArea className="h-full" offsetScrollbars>
                    
                    <Stack gap={22}>
                        {data.length > 0 && data.map((d, index) => (
                            <ChatCard
                                key={d.id}
                                chat={d.chat}
                                isGroup={d.isGroup}
                                time={d.time}
                                title={d.title}
                                groupSender={d.groupSender}
                                newMessage={d.newMessage}
                                lastIndex={index !== data.length}
                                onClick={() => setDataId(d.id)}
                            />
                        ))}
                    </Stack>
                </ScrollArea>
            ) : (
                <Loading title='Loading Chats ...'/>
            )}

        </Stack>
    )
}

export default ChatList
