import { Popover, ActionIcon, Stack } from '@mantine/core'
import { useState } from 'react'
import TagsCard from 'shared/components/TagsCard'
import { COLORS } from 'shared/utils/colors'

interface ITagsPopoverProps {
    id: number
    tags: Array<{
        id: number
        name: string
        color: string
        selected: boolean
    }>
    updateTags: (
        index: number,
        newTags: {
            id: number
            name: string
            color: string
        }
    ) => void
}

function TagsPopover({ id, tags, updateTags }: ITagsPopoverProps) {
    const [popoverOpened, setPopoverOpened] = useState<boolean>(false)

    return (
        <Popover
            opened={popoverOpened}
            onChange={setPopoverOpened}
            position={'bottom-start'}
            offset={{ mainAxis: 7, crossAxis: 7 }}
            radius={5}
            width={278}
            styles={{
                dropdown: {
                    borderColor: COLORS.primary_gray_2,
                },
            }}
        >
            <Popover.Target>
                <ActionIcon
                    variant="transparent"
                    c={'#333333'}
                    onClick={() => setPopoverOpened((value) => !value)}
                >
                    <svg
                        width="15"
                        height="20"
                        viewBox="0 0 15 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M13.4032 0.833374H5.52334C4.65742 0.833374 3.95681 1.58337 3.95681 2.50004H11.8288C12.6947 2.50004 13.4032 3.25004 13.4032 4.16671V15L14.9776 15.8334V2.50004C14.9776 1.58337 14.2691 0.833374 13.4032 0.833374ZM10.2545 5.83337V16.6417L6.94038 15.1334L6.31849 14.85L5.69661 15.1334L2.38249 16.6417V5.83337H10.2545ZM2.38245 4.16671H10.2545C11.1204 4.16671 11.8289 4.91671 11.8289 5.83337V19.1667L6.31845 16.6667L0.808044 19.1667V5.83337C0.808044 4.91671 1.51653 4.16671 2.38245 4.16671Z"
                            fill={
                                tags.some((tags) => tags.selected === true)
                                    ? COLORS.primary_blue
                                    : COLORS.primary_gray_1
                            }
                        />
                    </svg>
                </ActionIcon>
            </Popover.Target>
            <Popover.Dropdown py={14} px={16}>
                <Stack gap={11}>
                    {tags.map((d, index) => (
                        <TagsCard
                            tagId={d.id}
                            todoId={id}
                            key={index}
                            text={d.name}
                            textSize={12}
                            cardColor={d.color}
                            widthMode={'full'}
                            selected={d.selected}
                            updateTags={updateTags}
                        />
                    ))}
                </Stack>
            </Popover.Dropdown>
        </Popover>
    )
}

export default TagsPopover
