import { ActionIcon, Affix, Flex, Image } from '@mantine/core'
import FeatherIcon from 'assets/icon/feather_icon.svg'
import QuestionIcon from 'assets/icon/question_icon.svg'
import QuestionWhiteIcon from 'assets/icon/question_icon_white.svg'
import ReaderIcon from 'assets/icon/reader_icon.svg'
import ReaderWhiteIcon from 'assets/icon/reader_icon_white.svg'

interface IFloatingActionButtonProps {
    mode: string
    setMode: (mode: 'task' | 'inbox' | '') => void
    opened: boolean
    setOpened: (opened: boolean) => void
    onClose: (id: number) => void
}

function FloatingActionButton({
    mode,
    opened,
    setMode,
    setOpened,
    onClose,
}: IFloatingActionButtonProps) {
    return (
        <Affix position={{ bottom: 20, right: 20 }}>
            <Flex
                justify="flex-start"
                align="center"
                direction="row-reverse"
                wrap="wrap"
                gap={'md'}
            >
                {mode === '' && (
                    <ActionIcon
                        size={50}
                        radius="xl"
                        color="primary_blue"
                        onClick={() => {
                            setOpened(!opened)
                            onClose(-1)
                        }}
                    >
                        <Image
                            src={FeatherIcon}
                            style={{ width: '60%', height: '60%' }}
                        />
                    </ActionIcon>
                )}

                {mode === 'inbox' && (
                    <ActionIcon
                        className="shadow-[-10px_0px_0px_0px] shadow-primary_gray_1"
                        size={50}
                        radius="xl"
                        color="indicator_blue"
                        onClick={() => {
                            setMode('')
                            setOpened(!opened)
                            onClose(-1)
                        }}
                    >
                        <Image
                            src={QuestionWhiteIcon}
                            style={{ width: '60%', height: '60%' }}
                        />
                    </ActionIcon>
                )}

                {mode === 'task' && (
                    <ActionIcon
                        className="shadow-[-10px_0px_0px_0px] shadow-primary_gray_1"
                        size={50}
                        radius="xl"
                        color="indicator_orange"
                        onClick={() => {
                            setMode('')
                            setOpened(!opened)
                            onClose(-1)
                        }}
                    >
                        <Image
                            src={ReaderWhiteIcon}
                            style={{ width: '60%', height: '60%' }}
                        />
                    </ActionIcon>
                )}

                {opened && (
                    <>
                        {mode !== 'inbox' && (
                            <ActionIcon
                                mr={mode !== '' ? 'xs' : 0}
                                size={46}
                                radius="xl"
                                color="#F2F2F2"
                                onClick={() => {
                                    setMode('inbox')
                                    onClose(-1)
                                }}
                            >
                                <Image
                                    src={QuestionIcon}
                                    style={{
                                        width: '50%',
                                        height: '50%',
                                    }}
                                />
                            </ActionIcon>
                        )}
                        {mode !== 'task' && (
                            <ActionIcon
                                mr={mode !== '' ? 'xs' : 0}
                                size={46}
                                radius="xl"
                                color="#F2F2F2"
                                onClick={() => {
                                    setMode('task')
                                    onClose(-1)
                                }}
                            >
                                <Image
                                    src={ReaderIcon}
                                    style={{
                                        width: '50%',
                                        height: '50%',
                                    }}
                                />
                            </ActionIcon>
                        )}
                    </>
                )}
            </Flex>
        </Affix>
    )
}

export default FloatingActionButton
