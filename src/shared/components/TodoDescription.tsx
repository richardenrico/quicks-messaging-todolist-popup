import { Group, Textarea } from '@mantine/core'
import { COLORS } from 'shared/utils/colors'

interface ITodoDescriptionProps {
    value: string
    setValue: (value: string) => void
}

function TodoDescription({ value, setValue }: ITodoDescriptionProps) {
    return (
        <Group align="flex-start" wrap="nowrap">
            <svg
                className="mt-3"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.2165 0C12.0082 0 11.7915 0.0833333 11.6332 0.241667L10.1082 1.76667L13.2332 4.89167L14.7582 3.36667C15.0832 3.04167 15.0832 2.51667 14.7582 2.19167L12.8082 0.241667C12.6415 0.075 12.4332 0 12.2165 0ZM9.21667 5.01667L9.98333 5.78333L2.43333 13.3333H1.66667V12.5667L9.21667 5.01667ZM0 11.875L9.21667 2.65833L12.3417 5.78333L3.125 15H0V11.875Z"
                    fill={
                        value !== ''
                            ? COLORS.primary_blue
                            : COLORS.primary_gray_1
                    }
                />
            </svg>

            <Textarea
                variant="unstyled"
                autosize
                className="w-full"
                placeholder="No Description"
                styles={{
                    input: {
                        color: COLORS.primary_gray_1,
                    },
                }}
                onChange={(event) => setValue(event.currentTarget.value)}
            />
        </Group>
    )
}

export default TodoDescription
