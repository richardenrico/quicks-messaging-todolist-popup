import { AppShell, Burger, Group, TextInput } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Outlet } from 'react-router-dom'

function UserAppShell() {
    const [opened, { toggle }] = useDisclosure()

    return (
        <AppShell
            layout="alt"
            footer={{ height: 60 }}
            navbar={{
                width: 250,
                breakpoint: 'sm',
                collapsed: { mobile: !opened },
            }}
            padding="md"
            bg={'#333333'}
        >
            <Burger
                color={'white'}
                opened={opened}
                onClick={toggle}
                hiddenFrom="sm"
                size="sm"
            />
            <AppShell.Navbar p="md" bg={'#333333'}>
                <Group>
                    <Burger
                        color={'white'}
                        opened={opened}
                        onClick={toggle}
                        hiddenFrom="sm"
                        size="sm"
                    />
                </Group>
            </AppShell.Navbar>
            <AppShell.Main>
                <Outlet />
            </AppShell.Main>
        </AppShell>
    )
}

export default UserAppShell
