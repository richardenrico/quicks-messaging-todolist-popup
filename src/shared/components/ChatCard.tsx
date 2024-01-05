import { Group, Image, Flex, Stack, Divider, Text, Avatar } from '@mantine/core'
import GroupChatAvatarIcon from 'assets/icon/group_chat_avatar_icon.svg'
import { getNumberDate, getStringDate } from 'shared/utils/string.utils'

export interface IChatCardProps {
    chat: string
    groupSender?: string
    isGroup: boolean
    lastIndex?: boolean
    newMessage?: boolean
    onClick: () => void
    time: number
    title: string
}

function ChatCard({
    chat,
    groupSender,
    isGroup,
    lastIndex = false,
    newMessage = false,
    onClick,
    title,
    time,
}: IChatCardProps) {
    return (
        <>
            <Group onClick={onClick} className="cursor-pointer">
                <Flex gap={'sm'} className="w-full">
                    {isGroup ? (
                        <Image src={GroupChatAvatarIcon} w={51} h={34} />
                    ) : (
                        <Group h={34} w={55} align="center">
                            <Avatar
                                className="mx-auto"
                                size={34}
                                variant="filled"
                                color={'primary_blue'}
                            >
                                {title.at(0)}
                            </Avatar>
                        </Group>
                    )}
                    <Stack gap={0} className="w-full">
                        <Flex mb={4} gap={'xl'} wrap="nowrap">
                            <Text
                                fz={16}
                                c={'primary_blue'}
                                fw={'bold'}
                                inline
                                className={`${
                                    newMessage
                                        ? 'max-w-[270px]'
                                        : 'max-w-[295px]'
                                }`}
                            >
                                {title}
                            </Text>
                            <Text fz={14} c={'primary_gray_1'} inline>
                                {newMessage
                                    ? getStringDate(new Date(time))
                                    : getNumberDate(new Date(time))}
                            </Text>
                        </Flex>
                        {isGroup && (
                            <Text
                                fz={14}
                                c={'primary_gray_1'}
                                fw={'bold'}
                                inline
                            >
                                {groupSender} :
                            </Text>
                        )}
                        <Group>
                            <Text
                                fz={14}
                                c={'primary_gray_1'}
                                className="max-w-xs"
                                lineClamp={1}
                                inline
                            >
                                {chat}
                            </Text>
                            {newMessage && (
                                <div className="w-[10px] h-[10px] bg-indicator_red rounded-full ml-auto mt-auto" />
                            )}
                        </Group>
                    </Stack>
                </Flex>
            </Group>
            {lastIndex && <Divider size={1} c={'primary_gray_2'} />}
        </>
    )
}

export default ChatCard
