import { Container, TextInput } from '@mantine/core'
import Seo from 'shared/components/Seo'
import Search24Icon from 'assets/icon/search_24px.svg'
import { useState } from 'react'
import FloatingActionButton from 'shared/components/FloatingActionButton'

const Home = () => {
    const [opened, setOpened] = useState<boolean>(false)
    const [mode, setMode] = useState<'task' | 'inbox' | ''>('')

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
                />
            </Container>
        </>
    )
}

export default Home
