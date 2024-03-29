import { Group, Image } from '@mantine/core'
import { DateInput, DateValue } from '@mantine/dates'
import CalendarIcon from 'assets/icon/calendar_today_24px.svg'
import { COLORS } from 'shared/utils/colors'

interface ITodoDateProps {
    value: Date | null
    setValue: (value: DateValue) => void
}

function TodoDate({ setValue, value }: ITodoDateProps) {
    return (
        <Group wrap="nowrap">
            <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.99187 0.666687C4.39187 0.666687 0.66687 4.40002 0.66687 9.00002C0.66687 13.6 4.39187 17.3334 8.99187 17.3334C13.6002 17.3334 17.3335 13.6 17.3335 9.00002C17.3335 4.40002 13.6002 0.666687 8.99187 0.666687ZM9.00037 15.6667C5.31703 15.6667 2.3337 12.6834 2.3337 9.00002C2.3337 5.31669 5.31703 2.33335 9.00037 2.33335C12.6837 2.33335 15.667 5.31669 15.667 9.00002C15.667 12.6834 12.6837 15.6667 9.00037 15.6667ZM8.16687 4.83335H9.41687V9.20835L13.1669 11.4334L12.5419 12.4584L8.16687 9.83335V4.83335Z"
                    fill={value ? COLORS.primary_blue : COLORS.primary_gray_1}
                />
            </svg>

            <DateInput
                valueFormat="DD/MM/YYYY"
                placeholder="Set Date"
                w={193}
                rightSection={<Image src={CalendarIcon} />}
                rightSectionPointerEvents="none"
                value={value}
                onChange={setValue}
                popoverProps={{
                    position: 'bottom',
                    offset: {
                        mainAxis: 10,
                        crossAxis: 220,
                    },
                }}
                styles={{
                    input: {
                        borderColor: '#4F4F4F',
                        color: COLORS.primary_gray_1,
                    },
                }}
            />
        </Group>
    )
}

export default TodoDate
