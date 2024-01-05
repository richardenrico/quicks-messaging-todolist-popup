import {
    Affix,
    Container,
    Paper,
    ScrollArea,
    Stack,
    TextInput,
} from '@mantine/core'
import Seo from 'shared/components/Seo'
import Search24Icon from 'assets/icon/search_24px.svg'
import Search24BlackIcon from 'assets/icon/search_black_24px.svg'
import { useState } from 'react'
import FloatingActionButton from 'shared/components/FloatingActionButton'
import ChatCard from 'shared/components/ChatCard'
import { getChatListData } from 'pages/Home/data/chatData'

const Home = () => {
    const [opened, setOpened] = useState<boolean>(false)
    const [mode, setMode] = useState<'task' | 'inbox' | ''>('')
    const [dataId, setDataId] = useState<number>(-1)

    return (
        <>
            <Seo title={'Hello World'} />
            <Container fluid h={'100vh'} p={0}>
                <TextInput
                    leftSection={<img src={Search24Icon} />}
                    radius={0}
                    size="md"
                    styles={{
                        input: {
                            backgroundColor: '#4F4F4F',
                            borderColor: '#4F4F4F',
                            color: 'white',
                        },
                    }}
                />

                <FloatingActionButton
                    mode={mode}
                    opened={opened}
                    setMode={setMode}
                    setOpened={setOpened}
                    onClose={setDataId}
                />

                <Affix position={{ bottom: 80, right: 20 }}>
                    {mode === 'inbox' && (
                        <Paper
                            px={32}
                            py={24}
                            radius={5}
                            className="border-[1px] border-primary_gray_2 w-[554px] h-[450px] 2xl:w-[737px] 2xl:h-[734px]"
                        >
                            {dataId === -1 && (
                                <>
                                    <TextInput
                                        rightSection={
                                            <img src={Search24BlackIcon} />
                                        }
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
                                    <ScrollArea
                                        mt={22}
                                        className="h-[calc(450px-32px-32px-45px)]"
                                        offsetScrollbars
                                    >
                                        <Stack gap={22}>
                                            {getChatListData().map(
                                                (data, index) => (
                                                    <ChatCard
                                                        chat={data.chat}
                                                        isGroup={data.isGroup}
                                                        time={data.time}
                                                        title={data.title}
                                                        groupSender={
                                                            data.groupSender
                                                        }
                                                        newMessage={
                                                            data.newMessage
                                                        }
                                                        lastIndex={
                                                            index !==
                                                            getChatListData()
                                                                .length
                                                        }
                                                        onClick={() =>
                                                            setDataId(data.id)
                                                        }
                                                    />
                                                )
                                            )}
                                        </Stack>
                                    </ScrollArea>
                                </>
                            )}
                        </Paper>
                    )}
                </Affix>
            </Container>
        </>
    )
}

export default Home
