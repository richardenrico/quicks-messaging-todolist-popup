const chatListData = [
    {
        id: 1,
        chat: 'I recently watched an interesting documentary. Let me know if you want to know more!',
        groupSender: 'Bob',
        isGroup: true,
        newMessage: true,
        time: new Date().getTime(),
        title: 'Group Chat A',
    },
    {
        id: 2,
        chat: 'Hello!',
        groupSender: 'Group B',
        isGroup: true,
        newMessage: false,
        time: 1676563200000,
        title: 'Group Chat B',
    },
    {
        id: 3,
        chat: 'Not much planned, just relaxing. What about you, any interesting projects?',
        isGroup: false,
        newMessage: true,
        time: 1638210373000,
        title: 'Bob',
    },
    {
        id: 4,
        chat: 'Not much planned, just relaxing. What about you, any interesting projects?',
        isGroup: false,
        newMessage: false,
        time: 1636634374000,
        title: 'Charlie',
    },
    {
        id: 5,
        chat: "Hey there. Welcome to your inbox! Contact us for more information and help about anything! We'll send you a response as soon as possible.",
        isGroup: false,
        newMessage: false,
        time: new Date().getTime(),
        title: 'FastVisa Support',
    },
]

const chatsData = [
    {
        id: 1,
        data: {
            groupName: 'Group Chat A',
            totalParticipants: 3,
            chats: [
                {
                    time: 1676563200,
                    chats: [
                        {
                            mode: 'sender',
                            receiverMode: 0,
                            sender: 'Alice',
                            message: "Hi everyone! How's your day going?",
                            timestamp: 1676563200,
                            isRead: true,
                        },
                        {
                            mode: 'receiver',
                            receiverMode: 1,
                            sender: 'Bob',
                            message:
                                'Hey Alice! My day is going well. Just finished a workout. How about you?',
                            timestamp: 1676564000,
                            isRead: true,
                        },
                        {
                            mode: 'receiver',
                            receiverMode: 2,
                            sender: 'Charlie',
                            message:
                                "Hello! I'm good, thanks. Working on some coding projects. How about you, Alice?",
                            timestamp: 1676564800,
                            isRead: true,
                        },
                        {
                            mode: 'sender',
                            receiverMode: 0,
                            sender: 'Alice',
                            message:
                                "I'm doing great! Just relaxing and catching up on a book. Bob, any exciting plans for the evening?",
                            timestamp: 1676565600,
                            isRead: true,
                        },
                        {
                            mode: 'receiver',
                            receiverMode: 1,
                            sender: 'Bob',
                            message:
                                'Not much planned. Maybe watching a movie later. Charlie, what coding projects are you working on?',
                            timestamp: 1676566400,
                            isRead: true,
                        },
                        {
                            mode: 'receiver',
                            receiverMode: 2,
                            sender: 'Charlie',
                            message:
                                "I'm working on a new app feature. It's challenging but rewarding. How about you, Bob? Any movie recommendations?",
                            timestamp: 1676567200,
                            isRead: true,
                        },
                        {
                            mode: 'receiver',
                            receiverMode: 1,
                            sender: 'Bob',
                            message:
                                "I recently watched a great thriller. I can share the title with you. Let me know if you're interested!",
                            timestamp: 1676568000,
                            isRead: true,
                        },
                    ],
                },
                {
                    time: 1669257600,
                    chats: [
                        {
                            mode: 'sender',
                            receiverMode: 0,
                            sender: 'Alice',
                            message: "Hey everyone! What's up?",
                            timestamp: 1669257600,
                            isRead: true,
                        },
                        {
                            mode: 'receiver',
                            receiverMode: 1,
                            sender: 'Bob',
                            message:
                                'Hey Alice! Just finished a great workout. How about you?',
                            timestamp: 1669258400,
                            isRead: true,
                        },
                        {
                            mode: 'receiver',
                            receiverMode: 2,
                            sender: 'Charlie',
                            message:
                                'Hi Alice! Working on some interesting coding projects. What about you?',
                            timestamp: 1669259200,
                            isRead: true,
                        },
                        {
                            mode: 'sender',
                            receiverMode: 0,
                            sender: 'Alice',
                            message:
                                "Nice! I'm relaxing and reading a new book. Bob, any exciting plans for the evening?",
                            timestamp: 1669260000,
                            isRead: true,
                        },
                        {
                            mode: 'receiver',
                            receiverMode: 1,
                            sender: 'Bob',
                            message:
                                'Thinking about watching a movie later. Charlie, what coding projects are you working on?',
                            timestamp: 1669260800,
                            isRead: true,
                        },
                        {
                            mode: 'receiver',
                            receiverMode: 2,
                            sender: 'Charlie',
                            message:
                                "Working on a new app feature. It's both challenging and rewarding. Bob, any movie recommendations?",
                            timestamp: 1669261600,
                            isRead: true,
                        },
                        {
                            mode: 'receiver',
                            receiverMode: 1,
                            sender: 'Bob',
                            message:
                                "I recently watched an amazing thriller. I can share the title with you. Let me know if you're interested!",
                            timestamp: 1669262400,
                            isRead: true,
                        },
                    ],
                },
                {
                    time: new Date().getTime() / 1000,
                    chats: [
                        {
                            mode: 'sender',
                            receiverMode: 0,
                            sender: 'Alice',
                            message: "Hello everyone! How's your day going?",
                            timestamp: 1641427200,
                            isRead: true,
                        },
                        {
                            mode: 'receiver',
                            receiverMode: 1,
                            sender: 'Bob',
                            message:
                                'Hey Alice! Just finished a workout. Feeling energized. How about you?',
                            timestamp: 1641428000,
                            isRead: true,
                        },
                        {
                            mode: 'receiver',
                            receiverMode: 2,
                            sender: 'Charlie',
                            message:
                                "Hi Alice! Working on some coding challenges today. What's keeping you busy?",
                            timestamp: 1641428800,
                            isRead: true,
                        },
                        {
                            mode: 'sender',
                            receiverMode: 0,
                            sender: 'Alice',
                            message:
                                "I'm doing great! Just exploring a new hobby and enjoying my time. Bob, any exciting plans for the evening?",
                            timestamp: 1641429600,
                            isRead: true,
                        },
                        {
                            mode: 'receiver',
                            receiverMode: 1,
                            sender: 'Bob',
                            message:
                                'Thinking about watching a movie later. Charlie, what coding projects are you diving into?',
                            timestamp: 1641430400,
                            isRead: true,
                        },
                        {
                            mode: 'receiver',
                            receiverMode: 2,
                            sender: 'Charlie',
                            message:
                                "Experimenting with a new algorithm. It's quite fascinating. Bob, got any movie recommendations?",
                            timestamp: 1641431200,
                            isRead: false,
                        },
                        {
                            mode: 'receiver',
                            receiverMode: 1,
                            sender: 'Bob',
                            message:
                                'I recently watched an interesting documentary. Let me know if you want to know more!',
                            timestamp: 1641432000,
                            isRead: false,
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 2,
        data: {
            groupName: 'Group Chat B',
            totalParticipants: 3,
            chats: [
                {
                    time: 1676563200,
                    chats: [
                        {
                            mode: 'sender',
                            receiverMode: 0,
                            sender: 'Alice',
                            message: "Hi everyone! How's your day going?",
                            timestamp: 1676563200,
                            isRead: true,
                        },
                        {
                            mode: 'receiver',
                            receiverMode: 1,
                            sender: 'Bob',
                            message:
                                'Hey Alice! My day is going well. Just finished a workout. How about you?',
                            timestamp: 1676564000,
                            isRead: true,
                        },
                        {
                            mode: 'receiver',
                            receiverMode: 2,
                            sender: 'Charlie',
                            message:
                                "Hello! I'm good, thanks. Working on some coding projects. How about you, Alice?",
                            timestamp: 1676564800,
                            isRead: true,
                        },
                        {
                            mode: 'sender',
                            receiverMode: 0,
                            sender: 'Alice',
                            message:
                                "I'm doing great! Just relaxing and catching up on a book. Bob, any exciting plans for the evening?",
                            timestamp: 1676565600,
                            isRead: true,
                        },
                        {
                            mode: 'receiver',
                            receiverMode: 1,
                            sender: 'Bob',
                            message:
                                'Not much planned. Maybe watching a movie later. Charlie, what coding projects are you working on?',
                            timestamp: 1676566400,
                            isRead: true,
                        },
                        {
                            mode: 'receiver',
                            receiverMode: 2,
                            sender: 'Charlie',
                            message:
                                "I'm working on a new app feature. It's challenging but rewarding. How about you, Bob? Any movie recommendations?",
                            timestamp: 1676567200,
                            isRead: true,
                        },
                        {
                            mode: 'receiver',
                            receiverMode: 1,
                            sender: 'Bob',
                            message:
                                "I recently watched a great thriller. I can share the title with you. Let me know if you're interested!",
                            timestamp: 1676568000,
                            isRead: true,
                        },
                    ],
                },
                {
                    time: 1669257600,
                    chats: [
                        {
                            mode: 'sender',
                            receiverMode: 0,
                            sender: 'Alice',
                            message: "Hey everyone! What's up?",
                            timestamp: 1669257600,
                            isRead: true,
                        },
                        {
                            mode: 'receiver',
                            receiverMode: 1,
                            sender: 'Bob',
                            message:
                                'Hey Alice! Just finished a great workout. How about you?',
                            timestamp: 1669258400,
                            isRead: true,
                        },
                        {
                            mode: 'receiver',
                            receiverMode: 2,
                            sender: 'Charlie',
                            message:
                                'Hi Alice! Working on some interesting coding projects. What about you?',
                            timestamp: 1669259200,
                            isRead: true,
                        },
                        {
                            mode: 'sender',
                            receiverMode: 0,
                            sender: 'Alice',
                            message:
                                "Nice! I'm relaxing and reading a new book. Bob, any exciting plans for the evening?",
                            timestamp: 1669260000,
                            isRead: true,
                        },
                        {
                            mode: 'receiver',
                            receiverMode: 1,
                            sender: 'Bob',
                            message:
                                'Thinking about watching a movie later. Charlie, what coding projects are you working on?',
                            timestamp: 1669260800,
                            isRead: true,
                        },
                        {
                            mode: 'receiver',
                            receiverMode: 2,
                            sender: 'Charlie',
                            message:
                                "Working on a new app feature. It's both challenging and rewarding. Bob, any movie recommendations?",
                            timestamp: 1669261600,
                            isRead: true,
                        },
                        {
                            mode: 'receiver',
                            receiverMode: 1,
                            sender: 'Bob',
                            message:
                                "I recently watched an amazing thriller. I can share the title with you. Let me know if you're interested!",
                            timestamp: 1669262400,
                            isRead: true,
                        },
                    ],
                },
                {
                    time: 1676563200,
                    chats: [
                        {
                            mode: 'sender',
                            receiverMode: 0,
                            sender: 'Alice',
                            message: "Hello everyone! How's your day going?",
                            timestamp: 1641427200,
                            isRead: true,
                        },
                        {
                            mode: 'receiver',
                            receiverMode: 1,
                            sender: 'Bob',
                            message:
                                'Hey Alice! Just finished a workout. Feeling energized. How about you?',
                            timestamp: 1641428000,
                            isRead: true,
                        },
                        {
                            mode: 'receiver',
                            receiverMode: 2,
                            sender: 'Charlie',
                            message:
                                "Hi Alice! Working on some coding challenges today. What's keeping you busy?",
                            timestamp: 1641428800,
                            isRead: true,
                        },
                        {
                            mode: 'sender',
                            receiverMode: 0,
                            sender: 'Alice',
                            message:
                                "I'm doing great! Just exploring a new hobby and enjoying my time. Bob, any exciting plans for the evening?",
                            timestamp: 1641429600,
                            isRead: true,
                        },
                        {
                            mode: 'receiver',
                            receiverMode: 1,
                            sender: 'Bob',
                            message:
                                'Thinking about watching a movie later. Charlie, what coding projects are you diving into?',
                            timestamp: 1641430400,
                            isRead: true,
                        },
                        {
                            mode: 'receiver',
                            receiverMode: 2,
                            sender: 'Charlie',
                            message:
                                "Experimenting with a new algorithm. It's quite fascinating. Bob, got any movie recommendations?",
                            timestamp: 1641431200,
                            isRead: true,
                        },
                        {
                            mode: 'receiver',
                            receiverMode: 1,
                            sender: 'Bob',
                            message:
                                'I recently watched an interesting documentary. Let me know if you want to know more!',
                            timestamp: 1641432000,
                            isRead: true,
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 3,
        data: {
            groupName: 'Bob',
            totalParticipants: 0,
            chats: [
                {
                    time: 1676566400,
                    chats: [
                        {
                            mode: 'sender',
                            receiverMode: 0,
                            sender: 'Alice',
                            message: 'Hey Bob! How you doing today?',
                            timestamp: 1676564000,
                            isRead: true,
                        },
                        {
                            mode: 'receiver',
                            receiverMode: 1,
                            sender: 'Bob',
                            message:
                                "Hi Alice! I'm doing well, thanks. How about you?",
                            timestamp: 1676564800,
                            isRead: true,
                        },
                        {
                            mode: 'sender',
                            receiverMode: 0,
                            sender: 'Alice',
                            message:
                                "I'm good too, just catching up on some work. Any exciting plans for the day?",
                            timestamp: 1676565600,
                            isRead: true,
                        },
                        {
                            mode: 'receiver',
                            receiverMode: 1,
                            sender: 'Bob',
                            message:
                                'Not much planned, just relaxing. What about you, any interesting projects?',
                            timestamp: 1676566400,
                            isRead: false,
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 4,
        data: {
            groupName: 'Charlie',
            totalParticipants: 0,
            chats: [
                {
                    time: 1676566400,
                    chats: [
                        {
                            mode: 'sender',
                            receiverMode: 0,
                            sender: 'Alice',
                            message: 'Hey Charlie! How you doing today?',
                            timestamp: 1676564000,
                            isRead: true,
                        },
                        {
                            mode: 'receiver',
                            receiverMode: 1,
                            sender: 'Charlie',
                            message:
                                "Hi Alice! I'm doing well, thanks. How about you?",
                            timestamp: 1676564800,
                            isRead: true,
                        },
                        {
                            mode: 'sender',
                            receiverMode: 0,
                            sender: 'Alice',
                            message:
                                "I'm good too, just catching up on some work. Any exciting plans for the day?",
                            timestamp: 1676565600,
                            isRead: true,
                        },
                        {
                            mode: 'receiver',
                            receiverMode: 1,
                            sender: 'Charlie',
                            message:
                                'Not much planned, just relaxing. What about you, any interesting projects?',
                            timestamp: 1676566400,
                            isRead: true,
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 5,
        data: {
            groupName: 'FastVisa Support',
            totalParticipants: 0,
            isSupport: true,
            chats: [
                {
                    time: new Date().getTime() / 1000,
                    chats: [
                        {
                            mode: 'receiver',
                            receiverMode: 1,
                            sender: 'FastVisa Support',
                            message:
                                "Hey there. Welcome to your inbox! Contact us for more information and help about anything! We'll send you a response as soon as possible.",
                            timestamp: new Date().getTime() / 1000,
                            isRead: true,
                        },
                    ],
                },
            ],
        },
    },
]

export function getChatListData() {
    return chatListData
}

export function getChatDataById(id: number) {
    const data = chatsData.filter((chat) => chat.id === id)

    return data.at(0)
}
