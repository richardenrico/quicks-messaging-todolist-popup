import {
    Affix,
    Container,
    TextInput,
} from '@mantine/core'
import Seo from 'shared/components/Seo'
import Search24Icon from 'assets/icon/search_24px.svg'
import { useState } from 'react'
import FloatingActionButton from 'shared/components/FloatingActionButton'
import ChatList from 'shared/components/ChatList'
import ChatDetail from 'shared/components/ChatDetail'
import BasePopup from 'shared/components/BasePopup'
import TodoArea from 'shared/components/TodoArea'

const Home = () => {
    const [opened, setOpened] = useState<boolean>(false)
    const [mode, setMode] = useState<'task' | 'inbox' | ''>('')
    const [dataId, setDataId] = useState<number>(-1)

    return (
        <>
            <Seo title={'Quicks App'} />
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
                        <BasePopup>
                            {dataId === -1 && (
                                <ChatList setDataId={setDataId} />
                            )}

                            {dataId > -1 && (
                                <ChatDetail
                                    dataId={dataId}
                                    setDataId={setDataId}
                                />
                            )}
                        </BasePopup>
                    )}

                    {mode === 'task' && (
                        <BasePopup>
                            <TodoArea />
                        </BasePopup>
                    )}
                </Affix>
            </Container>
        </>
    )
}

export default Home
