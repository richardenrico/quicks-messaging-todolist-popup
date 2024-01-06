import { Stack, Group, ActionIcon, Divider, Image, Text } from '@mantine/core'
import ArrowBack24Icon from 'assets/icon/arrow_back_24px.svg'
import Close24Icon from 'assets/icon/close_24px.svg'

interface IChatHeaderProps {
    setDataId: (id: number) => void
    name: string
    participant: number
}

function ChatHeader({ name, participant = 0, setDataId }: IChatHeaderProps) {
    return (
        <Stack>
            <Group gap={'xs'} wrap="nowrap" justify="space-between">
                <ActionIcon
                    size={24}
                    variant="transparent"
                    c={'#333333'}
                    onClick={() => setDataId(-1)}
                >
                    <Image
                        src={ArrowBack24Icon}
                        style={{
                            width: '60%',
                            height: '60%',
                        }}
                    />
                </ActionIcon>
                <Stack className="w-full" align="flex-start" gap={6}>
                    <Text fz={16} fw={'bold'} c={'primary_blue'} inline>
                        {name}
                    </Text>
                    {participant !== 0 && (
                        <Text fz={12} c={'#333333'} inline>
                            {participant} Participants
                        </Text>
                    )}
                </Stack>
                <ActionIcon
                    size={24}
                    variant="transparent"
                    c={'#333333'}
                    onClick={() => setDataId(-1)}
                >
                    <Image
                        src={Close24Icon}
                        style={{
                            width: '60%',
                            height: '60%',
                        }}
                    />
                </ActionIcon>
            </Group>
            <Divider my={4} size={1} c={'#BDBDBD'} className="-mx-[32px]" />
        </Stack>
    )
}

export default ChatHeader
