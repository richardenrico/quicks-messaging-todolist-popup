import { AppShell, Burger, Group } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Outlet } from 'react-router-dom'

function UserAppShell() {
    const [opened, { toggle }] = useDisclosure()

    return (
        <AppShell
            layout="alt"
            header={{ height: 60 }}
            footer={{ height: 60 }}
            navbar={{
                width: 200,
                breakpoint: 'sm',
                collapsed: { mobile: !opened },
            }}
            padding="md"
        >
            <AppShell.Header>
                <Group h="100%" px="md">
                    <Burger
                        opened={opened}
                        onClick={toggle}
                        hiddenFrom="sm"
                        size="sm"
                    />
                    {/* <MantineLogo size={30} /> */}
                </Group>
            </AppShell.Header>
            <AppShell.Navbar p="md">
                <Group>
                    <Burger
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
